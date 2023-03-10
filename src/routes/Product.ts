import  express  from "express";
import { createBook, createProduct } from '../controllers/Product';

const productRoute=express.Router()

productRoute.post("/",async(req,res)=>{
try {
    
    const newProduct=req.body.code?await createProduct(req.body):await createBook(req.body)
    res.status(200).send(newProduct)
} catch (error:any) {
    res.status(400).send({error:error.message})
}
})

export default productRoute