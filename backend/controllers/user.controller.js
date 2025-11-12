import bcrypt from 'bcrypt'
import User from '../models/user.model.js';
import transporter from '../config/nodemailer.js';
import jwt from 'jsonwebtoken'
import {validationResult} from 'express-validator'

import dotenv from 'dotenv'
import { validationResult } from 'express-validator';
dotenv.config()


export const register = async(req,res)=>{
    try {

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const { email, username, password } = req.body;

        const user =await User.findOne({email});
        if(user){
            return res.status(400).json({message:"user already exist",success:false})
        }
        const hashPass =await bcrypt.hash(password,10)
        const newUser = new User({email,username,password:hashPass})
        
        const otp=String(Math.floor(Math.random()*900000 + 100000));
        newUser.verification_otp=otp;
        newUser.isverified=false;

        const mailoptions = {
            from :process.env.SENDER_EMAIL,
            to:email,
            subject:"verification email for registering as a user",
            text:`heyy user! this otp has been sent to you for verifying your email for Suhani Style Studio
            please verify with the OTP:${otp}`
        }
        await transporter.sendMail(mailoptions);
        console.log("mail sent");
        
        
        await newUser.save();

        return res.status(200).json({message:"user registered successfull",success:true});
    } catch (error) {
        console.log("err while registering user",error.message);
        return res.status(500).json({message:"err while registering user",success:false})
    }
}

export const verifyOtp = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});

    }
    try {

        const {email,otp} = req.body
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"user not found ",success:false});
        }
        if(user.verification_otp==otp){
            user.isverified=true;
            user.verification_otp=null;
        }else{
            return res.status(400).json({message:"invalid otp",success:false});
            
        }
        await user.save();
        return res.status(200).json({message:"otp verified successfully"})

    } catch (error) {
        console.log("err while verifying otp");
        return res.status(400).json({message:"err while verifying otp",success:false});
        
    }
}
export const login = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try {
        const {email,password} = req.body;
        const user =await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"user not found",success:false})
        }
        if(!user.isverified){
        return res.status(400).json({message:"user not verified",success:false})
        }

        const verify_pass = await bcrypt.compare(password,user.password)

        if(!verify_pass){
        return res.status(400).json({message:"invalid credentials",success:false})
        }
        
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:24*60*60*1000
        })
        user.password=undefined;
        return res.status(200).json({message:"user login successfull",success:true,user})
        

    } catch (error) {
        console.log("err while login");
        return res.status(400).json({message:"err while login",success:false})
        
    }
}


export const logout = async(req,res)=>{
    try {
        res.cookie("token",'',{
            httpOnly:true,
            expires:new Date(0)
        });
        return res.status(200).json({message:"logout successfull",success:true});
    } catch (error) {
        return res.status(400).json({message:"err while logout"})

    }
}

export const sendresetotp = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email } = req.body;
        const user = await User.findOne({ email });


        if (!user) {
            return res.status(200).json({ 
                message: "Reset OTP email pe bhej diya hai (agar email registered hai)", 
                success: true 
            });
        }

 
        const otp = String(Math.floor(100000 + Math.random() * 900000));

        const mailoptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Password Reset OTP - Suhani Style Studio",
            text: `Heyy ${user.username}! Aapka password reset OTP hai: ${otp}`
        };

        await transporter.sendMail(mailoptions);
        console.log("Reset OTP mail sent to " + email);

        user.reset_otp = otp;
        await user.save();

        return res.status(200).json({ message: "Reset OTP email pe bhej diya hai", success: true });

    } catch (error) {
        console.log("Error in sending reset OTP:", error.message);
        return res.status(500).json({ message: "Server mein error", success: false });
    }
}


export const resetpass = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:"all feilds required",success:false})
    }
    try {
        const {otp,email,newpass} = req.body
        if(!otp || !email){
            return res.json({message:"all feilds required"});
        }

        const user = await User.findOne({email})
        if(!user){
            return res.json({message:"no user found"});
        }
        
       if(otp!==user.reset_otp){
        return res.json({message:"invalid or expired otp bro "})
       }

       const hashpass = await bcrypt.hash(newpass,10);
       user.password= hashpass;
       user.reset_otp=null;
       await user.save();

       return res.json({message:"password changed"});



    } catch (error) {
        return res.status(400).json({message:"err verifying otp",success:false})
    }
}

