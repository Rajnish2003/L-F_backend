const mongoose = require("mongoose");

const productInfo=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    writer:{
        type:String,
        required:true
    },
    price: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    image: {
        type: String,
        required: true
    }
});
const product=new mongoose.model("IITBHU",productInfo);
module.exports = product;