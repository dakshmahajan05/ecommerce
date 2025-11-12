import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import dotenv from 'dotenv'
dotenv.config()


//cookie se token uthaya (token bna hai user id se)
//vo use find kiya User model me se agr mila to yani user authiorised hai 

export const protect = async(req,res,next)=>{
    let token ;
    try {
        token = req.cookies.token ;
        if (!token ){
            return res.this.status(400).json({message:"no token found",success:false});

        }
        const decodedToken = await jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decodedToken.userId).select('-password');
        if(!user){
            return res.status(400).json({message:"no authorised user found",success:false});
        }
        req.user = user;
        next()
    } catch (error) {
    console.log("err in auth middleware",error);
    return res.status(400).json({message:"err during auth middleware",success:false})

    }
}

export const isAdmin = async(req,res,next)=>{
    try {
        if(req.user && req.user.isadmin){
            next();
        }
    } catch (error) {
        return res.status(400).json({message:"not authorised as an admin",success:false})
    }
}