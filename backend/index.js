import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/conn.js'
dotenv.config()
import cookieParser from 'cookie-parser'
import userRoute from './routes/user.routes.js'





const app = express()
app.use(express.json())
app.use(cookieParser())


const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("server cvhl rha hai......")
})
//mongoDB conn
connectDB();

app.use('/api/user',userRoute)

app.listen(port, ()=>{
    console.log(`server running on PORT ${port}`);
    
})