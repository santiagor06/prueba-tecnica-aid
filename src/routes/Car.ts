import express from 'express';
import { createSell } from '../controllers/Car';

const carRoute=express.Router()

carRoute.post("/sell",async(req,res)=>{
    try {
      const newSell=await createSell(req.body)
      res.status(200).send(newSell)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }
})

export default carRoute