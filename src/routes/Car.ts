import express from 'express';
import { createSell, checkCar } from '../controllers/Car';

const carRoute=express.Router()

carRoute.post("/",async(req,res)=>{
    try {
      const newSell=await createSell(req.body)
      res.status(200).send(newSell)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }
})
carRoute.put("/",async(_req,res)=>{
    try {
      await checkCar()
      res.status(200).send({message:"successful purchase"})
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }
})

export default carRoute