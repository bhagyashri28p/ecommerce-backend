const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    stock:{
        type:Number
    },
    size:{
        type:String
    },
});
module.exports=mongoose.model("productdetail",userSchema);
