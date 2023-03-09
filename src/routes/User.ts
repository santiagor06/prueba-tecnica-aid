import express from 'express';

import { createUser } from '../controllers/Users';

const userRoute=express.Router()

userRoute.post("/",async(req,res)=>{

    try {
        const newUser=await createUser(req.body);
        res.status(200).send(newUser)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }

})



export default userRoute