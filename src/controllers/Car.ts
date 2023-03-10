import { Sell } from '@prisma/client';
import { parseSell } from '../services/car';
import { db } from '../utils/db.server';
export const createSell=async(param:any):Promise<Sell>=>{

    const {userId,amount,productId}=parseSell(param);

    const car=await db.car.findUnique({
        where:{
            userId
        }
    })
    if(!car)throw new Error("car not exist")
    const carId=car.id
    const newSell=await db.sell.create({
        data:{
            amount,
            productId,
            carId,
            userId
        }
    })
    return newSell
}