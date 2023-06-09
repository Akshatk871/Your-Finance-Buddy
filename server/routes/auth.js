require('dotenv').config();
const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt=require('jsonwebtoken');
var fetchuser= require("../middleware/fetchuser")
const JWT_SECRET=process.env.JWT_SECRET;

//Route-1
 
router.post("/register", [
    body('name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    // If there are any errors, return Bad Request with errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        //Checking if the user with same email exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "User with the same email exists" })
        }

        var salt = bcrypt.genSaltSync(10);
        var secPass = bcrypt.hashSync(req.body.password, salt);

        //Creating a new User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data={
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some internal error occurred" })
    }

})

//Route-2

router.post("/login", [
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({min:5})
], async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, password}= req.body;
    try {
        //Finding the user with the provided email
        let user= await User.findOne({email: email})
        if(!user){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        //Checking the password
        const passwordCompare=bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        res.json(authToken)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some internal error occurred" })
    }
})

//Route 3

router.post("/getuser" , fetchuser , async(req, res)=>{
    try {
        let userId=req.user.id;
        const user=await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
})



module.exports = router;