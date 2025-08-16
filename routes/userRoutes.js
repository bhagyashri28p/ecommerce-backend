const express=require("express");
const router=express.Router();
const user=require("./../models/user");

//Examples Register user
router.post("/register",async(req,res)=>{
    try{
        const{name,email,password,address,contact,age,birth_date}=req.body;
        const newUser= await user.create({name,email,password,address,contact,age,birth_date});
        res.json(newUser);
    }
    catch(error){
        res.status(500).json({ error:"Error creating user"});
    }
});

module.exports=router;
