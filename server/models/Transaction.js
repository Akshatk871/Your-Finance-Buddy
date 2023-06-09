const mongoose=require("mongoose");
const {Schema} =mongoose;

const transactionSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{type: String, required:true},
    date:{type: Date, default: Date.now , required:true},
    amount:{type: Number, required:true}
});

module.exports= mongoose.model("transaction" , transactionSchema);