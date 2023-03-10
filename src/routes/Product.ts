import  express  from "express";
import { createBook } from '../controllers/Product';

const productRoute=express.Router()

productRoute.post("/",async(req,res)=>{
try {
    const newBook=await createBook(req.body)
    res.status(200).send(newBook)
} catch (error:any) {
    res.status(400).send({error:error.message})
}
})

export default productRoute