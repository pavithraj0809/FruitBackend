const express=require('express');
const router=express.Router();
const {postdata,getdata,updatedata,deletedata}=require('../controller/emp');


router.post('/postdata',postdata);
router.get('/getdata',getdata);
router.put('/put/:id',updatedata);
router.delete('/delete/:id',deletedata);
module.exports=router;