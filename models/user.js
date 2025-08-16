const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String,

    },
    password:{
        type:String,
    },
    address:{
        type:String,
    },
    contact:{
        type:String,
    },
    age:{
        type:String,
    },
    birth_date:{
        type:String,
    }
});
module.exports=mongoose.model("User",userSchema);

