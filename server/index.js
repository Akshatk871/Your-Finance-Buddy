const express= require("express");

const connectToMongo=require("./database");
connectToMongo();

const app=express();

app.use(express.json());


app.use("/api/auth", require("./routes/auth"))
app.use("/api/transactions", require("./routes/transactions"))

app.listen(9000, ()=>{
    console.log("Server running at 9000.")
})