
import { User } from '@prisma/client'
import { db } from '../utils/db.server'
import { parseLoginUser, parseNewUser } from '../services/User';

type Token={
    token:string
}


export const createUser=async(user:any):Promise<Omit<User,"id" | "address"|"photo" | "password">>=>{
    const {name,password,email}=parseNewUser(user)
   const newUser=await db.user.create({
        data:{
            name,
            password,
            email
        },
        select:{
            email:true,
            name:true
        }
    })
    return newUser

}
export const loginUser=async(user:any):Promise<Token>=>{

    const {email,password}=parseLoginUser(user)
    const loginUser=await db.user.findUnique({
        where:{
            email
        }
    })
    if(!loginUser)throw new Error("Unregistered user")
    if(loginUser.password===password)return {token:"token"}
        else throw new Error("password incorrect")
}