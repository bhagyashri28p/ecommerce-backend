const express=require("express");
const mongoose=require("mongoose");

const app=express();
const PORT=8000;
//Middleware to parse JSON
app .use(express.json());

//static folder for image access
app.use("/uploads",
    express.static("uploads"));

//MongoDB Atlas connection string
const mongoURL="mongodb+srv://bhagyashri:bhagyashri@cluster0.96p82ld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose
.connect(mongoURL)
.then(()=>{
    console.log("MongoDB connected");
})

.catch((err)=>{
    console.error("MongoDB connection error ",err);
})

app.get("/",(req,res)=>{
    res.send("API is working fine");
});

const userRoutes=require("./routes/userRoutes");
app.use("/api",userRoutes);

const productRoutes=require("./routes/productRoutes");
app.use("/api",productRoutes);

//image upload route
const uploadRoute=require("./routes/upload");//import upload route
app.use("/api",uploadRoute);//mount it on/api/upload

//start the server
app.listen(PORT,()=>{
    console.log('hello server running on http://localhost:${PORT}');
});