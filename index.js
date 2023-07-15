const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const router=require('./routes/productRoutes');
const PORT=process.env.PORT||8000;
app.use(cors());
app.use(express.json());
require('dotenv').config();
app.use("/products", router); 

mongoose.connect(process.env.MONGODB)
    .then(() => console.log("Connected to database"))
 .catch((err) => console.log((err)));

app.get('/',(req,res)=>{
    res.send("You are in backend!");
})

app.listen(PORT,()=>{
    console.log("listening...");
});
