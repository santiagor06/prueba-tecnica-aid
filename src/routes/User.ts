import express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({log:["query","info"]})
const userRoute=express.Router()
userRoute.get("/",async(_req,res)=>{
    const user=await prisma.user.findMany()
    res.send(user)

})
export default userRoute