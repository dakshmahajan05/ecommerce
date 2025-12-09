import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/conn.js'
dotenv.config()
import cookieParser from 'cookie-parser'
import userRoute from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import orderRoute from './routes/order.routes.js'





const app = express()
app.use(express.json())
app.use(cookieParser())


const port = process.env.PORT || 3000;


//mongoDB conn
connectDB();
app.use(express.json());
app.use('/api/user',userRoute)
app.use('/api/product',productRouter)
app.use('/api/order',orderRoute)

app.get('/',(req,res)=>{
    res.send("heylo bhaiiiii")
})
app.listen(port, ()=>{
    console.log(`server running on PORT ${port}`);
    
})