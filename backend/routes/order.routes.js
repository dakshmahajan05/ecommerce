import { Router } from "express";
import { createOrder, getAllordres, getMyOrders, getOrderById,updateordertodelivered,updateordertopaid } from "../controllers/order.controllers.js";
import { isAdmin, protect } from "../middlewares/auth.middleware.js";

const orderRoute = Router()
//for user
orderRoute.post('/',protect,createOrder)
orderRoute.get('/myorders',protect,getMyOrders)
orderRoute.get('/:id',protect,getOrderById)
orderRoute.put('/:id/pay',protect,updateordertopaid)


//for admin only
orderRoute.get('/',protect,isAdmin,getAllordres)
orderRoute.put('/:id/deliver',protect,isAdmin,updateordertodelivered)

export default orderRoute;