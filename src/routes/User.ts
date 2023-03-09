import express from 'express';

import { createUser, loginUser, modifyUser } from '../controllers/Users';

const userRoute=express.Router()

userRoute.post("/",async(req,res)=>{

    try {
        const newUser=await createUser(req.body);
        res.status(200).send(newUser)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }

})

userRoute.post("/login",async(req,res)=>{

    try {
        const token=await loginUser(req.body);
        res.status(200).send(token)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }

})
userRoute.put("/",async(req,res)=>{

    try {
        const updateUser=await modifyUser(req.body);
        res.status(200).send(updateUser)
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }

})

export default userRoute