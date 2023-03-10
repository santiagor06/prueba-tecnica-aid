import  express  from "express";
import { createBook, createProduct, getProducts, modifyProduct } from '../controllers/Product';

const productRoute=express.Router()

productRoute.post("/",async(req,res)=>{
try {
    
    const newProduct=req.body.code?await createProduct(req.body):await createBook(req.body)
    res.status(200).send(newProduct)
} catch (error:any) {
    res.status(400).send({error:error.message})
}
})

productRoute.put("/",async(req,res)=>{
    try {
        
        const newProduct=await modifyProduct(req.body)
        res.status(200).send(newProduct)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }
    })

productRoute.get("/",async(_req,res)=>{
    try {
        
        const product=await getProducts()
        res.status(200).send(product)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }
    })

export default productRoute