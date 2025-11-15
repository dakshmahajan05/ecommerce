import Order from "../models/order.model.js";

export const createOrder = async(req,res)=>{
    try {
        const {orderItems,shippingAddress,totalPrice,paymentType} = req.body;

        if(orderItems && orderItems.length==0){
            return res.status(400).json({message:"no ordres yet",success:false});
        }
        const order = new Order({
            user:req.user._id,
            orderItems:orderItems,
            shippingAddress:shippingAddress,
            paymentType:paymentType,
            totalPrice:totalPrice,
        })

        const createdOrder = await order.save();
        return res.status(200).json({message:"created ordre succesfully",success:true,createdOrder})
    } catch (error) {
        return res.status(400).json({message:"err occured while creating order",success:false});
    }
}

export const getMyOrders = async(req,res)=>{
    try {
        const userId = req.user._id;
        const orders = await Order.find({user:userId});
        return res.status(200).json({orders});
    } catch (error) {
        return res.json({message:"faled to fetch ordres",success:false},error.message)
    }
}

export const getAllordres = async(req,res)=>{ 
    try {
        const orders = await Order.find({}).populate('user','id name');
        return res.json({orders});
    } catch (error) {
        return res.json({message:"cant fetch orders",success:false})
    }
}

export const getOrderById = async(req,res)=>{
    try {
        const {id} = req.params;
        const order = await Order.findById(id).populate('user','name email');

        if(!order){
            return res.json({message:"no ordre exist",sucess:false})
        }
        if (req.user.isAdmin || order.user._id.equals(req.user._id)) {
            return res.status(200).json(order);
        } else {
            return res.status(401).json({ message: "Not authorized to view this order", success: false });
        }
    } catch (error) {
        return res.json({message:"order cant fetched",sucess:false})
        
    }
}

export const updateordertopaid = async(req,res)=>{
    try {
        const {id} = req.params;
        const order = await Order.findById(id);
        if(!order){
            return res.json({message:"no order found",success:false})
        }
        order.isPaid= true;
        order.paidAt=Date.now()

        const updatedOrder =await order.save()

        return res.json({message:"updated succesfully",success:true,updatedOrder})
    } catch (error) {
        return res.json({message:"cant update order to paid",success:false})
        
    }
}

export const updateordertodelivered = async(req,res)=>{
    try {
        const {id} = req.params;
        const order = await Order.findById(id);
        if(!order){
            return res.json({message:"no order found",success:false})
        }
        order.isDelivered= true;
        order.deliveredAt=Date.now()

        const updatedOrder =await order.save()

        return res.json({message:"updated succesfully",success:true,updatedOrder})
    } catch (error) {
        return res.json({message:"cant update order to paid",success:false})
        
    }
}

