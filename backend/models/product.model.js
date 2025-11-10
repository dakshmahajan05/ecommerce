import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        default:0,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0,
    }

},{timestamps:true})
const Product = new mongoose.model("Product",productSchema)
export default Product