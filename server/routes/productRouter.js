import { Product } from '../models/productModel.js'
import { Router } from "express"
import { getAllProducts, createProduct } from "../controlers/productController.js"

const router = Router();

router.get('', getAllProducts)
router.post('', createProduct)

export default Router