const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();

const router=require('./router/router');


app.use(cors());
app.use(cors({orgin:"*"}))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api",router);




mongoose.connect('mongodb+srv://pavithra:pavi@cluster0.r1waizr.mongodb.net/one').then((req,res)=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log("error occures in DB");
})

router.get('/',(req,res)=>{
    res.send("Welcome to fruit back end");
})




module.exports=app;