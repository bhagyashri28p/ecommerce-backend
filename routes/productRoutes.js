const express=require("express");
const router=express.Router();
const productdetail=require("./../models/productdetail");

//Example Register User
router.post("/registers",async(req,res)=>{
    try{
        const{name,description,category,price,stock, size}=req.body;
        const newproductdetail=await productdetail.create({name,description,category,price,stock,size});
        res.json(newproductdetail)
    }
    catch(error){
        res.status(500).json({error:"Error creating productdetail" });
    }
});


router.get("/users",async(req,res)=>{
    try{
        const users=await productdetail.find();//get all users
        res.json(products);
        
    }catch(error){
        res.status(500).json({error: "Error fetching productdetail"});
    }
});

router.put("/registers/:id",async(req,res)=>{
    try{
        const updatedproductdetail=await user.findByIdAndUpdate(
            req.params.id,
            req.body,//data to update
            {new:true}//return updated document
        
        );
        res.json(updateduser);
    
    }catch (error){
        res.status(500).json({error:"Error updating productdetail"});
    }
});


router.delete("/registers/:id",async(req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id);
        res.json({message:"user deleted successfully"});
    
    }catch(error){
        res.status(500).json({error:"Error deleting productdetail"});
    }
});
module.exports=router;

