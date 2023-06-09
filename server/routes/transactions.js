const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Transaction = require("../models/Transaction");
const { body, validationResult } = require('express-validator');

//Route 1
router.get("/fetchtransaction", fetchuser, async (req, res) => {
    try {
        const transaction =await Transaction.find({ user: req.user.id });
        res.json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Some internal error occurred" })
    }

})

//Route 2
router.post("/addtransaction", fetchuser, [
    body('name').isLength({ min: 3 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, date, amount } = req.body;
        const transaction = new Transaction({
            name, date, amount, user: req.user.id
        })
        const savedTransaction = await transaction.save();

        res.json(savedTransaction);


    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some internal error occurred" })
    }
})

module.exports = router;