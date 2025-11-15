import mongoose, { mongo, Types }  from "mongoose";
import User from './user.model.js'
import Product from "./product.model.js";

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderItems:[{  //array of objects
        name:{
            type:String,
            required:true,
        },
        qty:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
        },
        image:{
            type:String,
            required:true
        },
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true
        }
}],
shippingAddress:{
   address:{
    type:String,
    required:true,
   },
    city:{
    type:String,
    required:true,
   },
    postalCode:{
    type:String,
    required:true,
   },
    country:{
    type:String,
    required:true,
   },
},
paymentType:{
    type:String,
    required:true,
},
isPaid:{
    type:Boolean,
    required:true,
    default:false,
},
isDelivered:{
    type:Boolean,
    required:true,
    default:false
},
totalPrice:{
    type:Number,
    required:true,
},
paymentResult:{
    id:{
        type:String,
    },
    status:{
        type:String
    },
    update_time:{
        type:String,
    },
    email_address:{
        type:String
    }
},
paidAt:{
    type:Date,
},
deliveredAt:{
    type:String
}

},{timestamps:true})

const Order = mongoose.model("Order",OrderSchema)
export default Order