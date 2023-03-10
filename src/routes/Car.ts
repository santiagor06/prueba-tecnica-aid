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
carRoute.put("/",async(req,res)=>{
    try {
      const ne=await checkCar(req.body)
      res.status(200).send(ne)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }
})

export default carRoute