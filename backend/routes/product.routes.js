import { Router } from "express";
import { createproduct, deleteproduct, getallproducts, getproduct, updateproduct } from "../controllers/product.controllers.js";
import { isAdmin, protect } from "../middlewares/auth.middleware.js";

const productRouter = Router()

productRouter.get('/',getallproducts)
productRouter.get('/:id',getproduct)

productRouter.post('/',protect,isAdmin,createproduct)
productRouter.put('/:id',protect,isAdmin,updateproduct)
productRouter.delete('/:id',protect,isAdmin,deleteproduct)
export default productRouter;