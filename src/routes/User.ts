import express from 'express';
import { parseNewUser } from '../services/User';
import { createUser } from '../controllers/Users';

const userRoute=express.Router()

userRoute.post("/",async(req,res)=>{

    try {
        const user=parseNewUser(req.body);
        const newUser=await createUser(user);
        res.status(200).send(newUser)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }

})


export default userRoute