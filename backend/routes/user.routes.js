import { Router } from "express";
import { login, logout, register, resetpass, sendresetotp, verifyOtp } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { protect } from "../middlewares/auth.middleware.js";

const userRoute = Router()


userRoute.post('/register',[
    check('email','enter correct email').isEmail(),
    check('username','dont leave ann empty username').not().isEmpty(),
    check('password','password length is lesser').isLength({min:6})
],register)


userRoute.post('/login',[
    check('email','dont leave an ampty email').isEmail(),
    check('password','min length of pass is 6').isLength({min:6}),
],login)

userRoute.post('/verify',[
    check('email','enter an email').isEmail(),
    check('otp','otp is mandatory').isLength({min:6,max:6})
],verifyOtp)

userRoute.get('/profile',protect,(req,res)=>{
    res.status(200).json({message:"user profile fetched",success:true,user:req.user})
})

userRoute.post('/logout',logout);

userRoute.post('/send-reset-otp',[
    check('email','enter correct email').isEmail(),
    
],sendresetotp)

userRoute.post('/reset-pass',[
    check('email','enter valid email').isEmail(),
    check('otp','enter valid otp').isLength({min:6,max:6}),
    check('newpass','enter new password').isLength({min:6})
],resetpass)

export default userRoute;