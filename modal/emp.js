const mongoose=require('mongoose');
const orderSchema=mongoose.Schema({
    name:{
        type:String
    },
    emailAddress:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    zipcode:{
        type:Number
    },
    state:{
        type:String
    },
    country:{
        type:String
    }
});

module.exports=mongoose.model('Order',orderSchema);