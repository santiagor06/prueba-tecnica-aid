
import { User } from '@prisma/client'
import { db } from '../utils/db.server'
import { parseLoginUser, parseNewUser, parseModifyUser } from '../services/User';




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
export const loginUser=async(user:any):Promise<Pick<User,"id">>=>{

    const {email,password}=parseLoginUser(user)
    const loginUser=await db.user.findUnique({
        where:{
            email
        }
    })
    if(!loginUser)throw new Error("Unregistered user")
    if(loginUser.password===password)return {id:loginUser.id}
        else throw new Error("password incorrect")
}

export const modifyUser=async(user:any):Promise<Pick<User,"photo"|"address">>=>{
    const {id,photo,address}=parseModifyUser(user);
    const updateUser=await db.user.update({
        where:{
            id
        },
        data:{
            photo,
            address,
        },
        select:{
            photo:true,
            address:true
        }
    })
    return updateUser
    

}