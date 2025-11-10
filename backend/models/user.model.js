import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    verification_otp:{
        type:Number,
    },
    isverified:{
        type:Boolean,
    },
    reset_otp:{
        type:Number,
    },
    isamdin:{
        type:Boolean,
        required:true,
        default:false
    }

},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User