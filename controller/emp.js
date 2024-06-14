const ordermodal=require('../modal/emp');
const postdata=async (req,res)=>{
    console.log(req.body)
    try{
        const localvar=new ordermodal ({
            name:req.body.name,
            email:req.body.emailAddress,
            mobile:req.body.mobileNumber,
            address:req.body.address,
            city:req.body.city,
            zipcode:req.body.zipcode,
            state:req.body.state,
            country:req.body.country

        });
        const savedata=await localvar.save();
        res.status(201).json(savedata)
    }catch(error){
       res.status(500).json({
        message:error.message
       });
    }

}
const getdata=async(req,res)=>{
    try{
        const getdata=await ordermodalmodal.find()
        res.status(200).json(getdata)

    }catch(error){
        res.status(500).json({
            message:error.message
        })

    }
}


const updatedata=async(req,res)=>{
    try{
        const getid=req.params.id;
        const updatedata=await ordermodal.findByIdAndUpdate({_id:getid},
            {
            name:req.body.name,
            email:req.body.emailAddress,
            mobile:req.body.mobileNumber,
            address:req.body.address,
            city:req.body.city,
            zipcode:req.body.zipcode,
            state:req.body.state,
            country:req.body.country

            },
            {
                new:true
            })
            res.status(200).json(updatedata)
    }catch(error){
        res.status(500).json({
            message:error.message
        })

    }
}
const deletedata=async(req,res)=>{
    try{
        const getid=req.params.id;
        const deletedata=await ordermodal.findByIdAndDelete({_id:getid});
        res.status(200).json({
            message:"Data Deleted Succesfully"
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
module.exports={postdata,getdata,updatedata,deletedata}