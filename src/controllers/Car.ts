import { Sell } from '@prisma/client';
import { parseSell} from '../services/car';
import { db } from '../utils/db.server';
export const createSell=async(param:any):Promise<Sell>=>{

    const {userId,amount,productId}=parseSell(param);
    const store=await db.store.findUnique({
        where:{
            productId
        }
    })
    if(!store)throw new Error ("product not exist")
    const resul=store?.amount-amount
    if(resul<0)throw new Error(`insufficient amount of ${store.name}`)
    const car=await db.car.findUnique({
        where:{
            userId
        }
    })


    if(!car)throw new Error("car not exist")
    const carId=car.id
    await db.store.update({
        where:{
            productId
        },
        data:{
            amount:resul
        }
    })
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

export const checkCar=async(body:any)=>{
    const {userId}=body
    if(!userId)throw new Error ("enter userId")

    const sell=db.sell.updateMany({
        where:{
            AND:[
                {userId:{
                    equals:userId
                }},
                {
                 status:{
                    equals:"pending"
                 }   
                }
            ],   
            },
        data:{
            status:"closed"
        }
    })

 return sell
    
}

export const getCar=(carId:string)=>{
    
    if(!carId)throw new Error ("enter carId")

    const car=db.sell.findMany({
        where:{
            AND:[
                {carId:{
                    equals:carId
                }},
                {
                 status:{
                    equals:"pending"
                 }   
                }
            ],   
            }
    })

 return car
}