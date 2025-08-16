const express=require("express");
const router=express.Router();
const upload=require("./../middleware/upload");
router.post("/upload",
    upload.single("image"),(req,res)=>{
        if(!req.file){
            return
            res.status(400).json({msg:"No file uploaded"});
        }
        const imageUrl=
        '${req.protocol}://${req.get("host")}/uploads/${req.file.filename}';
        res.json({msg:"Image uploaded successfully",imageUrl});
    });
    module.exports=router;