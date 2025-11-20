import Product from "../models/product.model.js"
import { uplaodCloudinary } from "../utils/cloudinary.js";

export const getallproducts = async(req,res)=>{
    try {
        const products =await Product.find({});
        return res.json({products});
    } catch (error) {
        return res.json({message:"cant fetch products",success:false})
    }
}

export const getproduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product =await Product.findById(id);
        if(!product){
            return res.json({message:"no such product found",success:false})
        }

        return res.json({message:"heres that product",success:true,product})
    } catch (error) {
        return res.status(400).json({message:"err while fetching this product",success:false,error})
    }
}

export const createproduct = async(req,res)=>{
    try {
        const {name,description,stock,price,category} = req.body
        console.log(req.body)
        const imagelocalPath = req.file?.path;
        if(!imagelocalPath){
            return res.status(400).json({message:"no image uplaod path found"})
        }
        if(!name || !price  || !stock || !category || !description ){
            return res.status(401).json({message:"sare feilds daal bhai",success:false});
        }


        const cloudinaryresponse = await uplaodCloudinary(imagelocalPath);

        if(!cloudinaryresponse){
            return res.status(500).json({message:"failed to uplaod image on cloudinary"})
        }

        const product = new Product({
            name,
            price,
            description,
            stock,
            category,
            image:cloudinaryresponse
        })
        const createproduct= await product.save()
        return res.status(200).json({message:"succesfully added new product",success:true,createproduct});
    } catch (error) {
        return res.json({message:"failed to create a new product",success:false});

    }
}

export const updateproduct = async(req,res)=>{
    try {
        const {id}= req.params;
        const updatedata = req.body;
        const updatedproduct = await Product.findByIdAndUpdate(id,updatedata,{
            new:true,
        })
        if(!updatedproduct){
            return res.json({message:"no product updated",success:false});
        }
        return res.json({message:"product updated succesfully",success:true,updatedproduct});
    } catch (error) {
        return res.json({message:"err while uopdating product",success:false})
    }
}    


export const deleteproduct =async(req,res) =>{
    try {
        const {id} = req.params;

        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.json({message:"cant fing product",success:false});
        }
        return res.json({message:"product deleted succesfully",success:true,product})
    } catch (error) {
        return res.json({message:"err while deleting prodict",success:false,error})
    }
}