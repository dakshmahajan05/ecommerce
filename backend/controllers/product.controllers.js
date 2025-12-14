import Product from "../models/product.model.js"
import { uplaodCloudinary } from "../utils/cloudinary.js";
import {regex} from 'regex';


// File: controllers/product.controller.js
// File: controllers/product.controller.js

export const getallproducts = async (req, res) => {
    try {
        const pageSize = 10; 
        const page = Number(req.query.pageNumber) || 1; 

        // 1. Basic Query Filters (Search, Category)
        const keyword = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: 'i'
                }
            }
            : {};
        
        const categoryFilter = req.query.category
            ? { category: req.query.category }
            : {};
        
        // 2. Price Filter Logic
        let priceFilter = {};
        const { min_price, max_price } = req.query; // Assuming front-end sends min_price and max_price

        if (min_price || max_price) {
            priceFilter.price = {};
            if (min_price) {
                priceFilter.price.$gte = Number(min_price);
            }
            if (max_price) {
                priceFilter.price.$lte = Number(max_price);
            }
        }
        
        // 3. Size Filter Logic
        let sizeFilter = {};
        const { size } = req.query; // Assuming front-end sends size as comma-separated string (e.g., 'S,M,XL')

        if (size) {
            const selectedSizes = size.split(',').map(s => s.trim().toUpperCase());
            
            if (selectedSizes.length > 0) {
                // $in: Products find karo jinki availableSizes array mein in selectedSizes mein se koi bhi size ho
                sizeFilter.availableSizes = { 
                    $in: selectedSizes 
                };
            }
        }

        // 4. Final Query Object (Saare filters ko jodna: Search + Category + Price + Size)
        const finalQuery = { 
            ...keyword, 
            ...categoryFilter,
            ...priceFilter,
            ...sizeFilter
        };
        
        // 5. Counting total documents (for pagination)
        const count = await Product.countDocuments(finalQuery);

        // 6. Fetching Products (Applying Pagination)
        const products = await Product.find(finalQuery)
            .limit(pageSize) 
            .skip(pageSize * (page - 1)); 

        // 7. Final Response
        return res.json({
            products,
            page,
            pages: Math.ceil(count / pageSize), 
            totalCount: count,
            success: true
        });

    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message: "Can't fetch products. Server Error.", success: false });
    }
};

// ... baaki functions (getproduct, createproduct, etc.) wohi rahenge ...
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

// export const createproduct = async(req,res)=>{
//     try {
//         const {name,description,stock,price,category} = req.body
//         console.log(req.body)
//         const imagelocalPath = req.file?.path;
//         if(!imagelocalPath){
//             return res.status(400).json({message:"no image uplaod path found"})
//         }
//         if(!name || !price  || !stock || !category || !description ){
//             return res.status(401).json({message:"sare feilds daal bhai",success:false});
//         }


//         const cloudinaryresponse = await uplaodCloudinary(imagelocalPath);

//         if(!cloudinaryresponse){
//             return res.status(500).json({message:"failed to uplaod image on cloudinary"})
//         }

//         const product = new Product({
//             name,
//             price,
//             description,
//             stock,
//             category,
//             image:cloudinaryresponse
//         })
//         const createproduct= await product.save()
//         return res.status(200).json({message:"succesfully added new product",success:true,createproduct});
//     } catch (error) {
//         return res.json({message:"failed to create a new product",success:false});

//     }
// }

export const createproduct=async(req,res)=>{
    try {
        const imagelocalPath= req.file.path;
         const {name,description,stock,price,category,availableSizes} = req.body

         if(!imagelocalPath) return res.json({message:"no file uplaoded locally"})
         if(!name || !description || !stock || !price || !category || availableSizes){
            return res.status(400).json({message:"emter all feilds"});
         }

        const cloudinaryresponse= await uplaodCloudinary(imagelocalPath)
        if(!cloudinaryresponse){
            return res.json({message:"cant uplaod file on cloudinary ..no url comming"})

        }
        const product= new Product({
            image:cloudinaryresponse.url,
            name,
            description,
            stock,
            price,
            category,availableSizes
        })
        
        const createproduct= await product.save();

        // return res.status(200).json({
        //     message:"uplaod on cloudniary sucessfull",
        //     url:cloudinaryresponse.url,
        //     data:cloudinaryresponse
        // })
        return res.status(200).json({message:"product created sucessfully",createproduct,success:true})
    } catch (error) {
         return res.json({message:"failed to create a new product",success:false});
        
    }
}

export const updateproduct = async(req,res)=>{
    try {
        const {id}= req.params;
        const updatedata = req.body;
        const productExist = await Product.findById(id);

     
        if(!productExist){
            return res.status(400).json({message:"no such product exists"})
        }

        const updatedproduct = await Product.findByIdAndUpdate(
            id,
            {$set:updatedata},
            {
            new:true,
            runValidators: true
            }
        )


        return res.json({message:"product updated succesfully",success:true,updatedproduct});
    } catch (error) {
        if(error.name==='ValidationError'){
            return res.status(400).json({ message: error.message, success: false });
        }
        return res.json({message:"err while uopdating product",success:false})
    }
}    
export const updateImage= async(req,res)=>{
    try {
        const productId = req.params.id;
        const imagelocalpath = req.file?.path

        if(!imagelocalpath){
            return res.status(400).json({message:"image file is mandatory",success:false})
        }

        const cloudinaryresponse= await uplaodCloudinary(imagelocalpath);

        if(!cloudinaryresponse){
            return res.status(400).json({message:"failed to upload on cloudinary",success:false});
        }

        const updatedproduct= await Product.findByIdAndUpdate(productId,
            
                {image:cloudinaryresponse.url},
                {new:true,runValidators:true},
            
        );
        if(!updatedproduct){
            return res.status(404).json({message:"image cant be updated",success:false});
        }
        return res.status(200).json({mesage:"image updated sucessfully",success:true,updatedproduct})
    } catch (error) {
        return res.status(400).json({message:"failed to update image",success:false,error:error.mesage})
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