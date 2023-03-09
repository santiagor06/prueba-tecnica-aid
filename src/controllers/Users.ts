
import { db } from '../utils/db.server'
import { Prisma, User } from '@prisma/client'


export const createUser=async(data:Prisma.UserCreateInput):Promise<User>=>{
 
    const newUser=await db.user.create({
        data
    })
    return newUser

}