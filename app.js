const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const port=3001;
const router=require('./router/router');


app.use(cors());
app.use(cors({orgin:"*"}))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api",router);


mongoose.connect('mongodb://localhost:27017/pavi').then((req,res)=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log("error occures in DB");
})



app.listen(port,()=>{
    console.log("Sever Started");
})