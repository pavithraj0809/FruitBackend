const express=require('express');
const router=express.Router();
const {postdata,getdata,updatedata,deletedata}=require('../controller/emp');

// router.get('/get',(req,res)=>{
//     res.send("Welcome to Node crud operation");
// })
router.post('/postdata',postdata);
router.get('/getdata',getdata);
router.put('/put/:id',updatedata);
router.delete('/delete/:id',deletedata);
module.exports=router;