import { Router } from "express";
import { login, logout, register, verifyOtp } from "../controllers/user.controller.js";
import { check } from "express-validator";
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

userRoute.post('/logout',logout);

export default userRoute;