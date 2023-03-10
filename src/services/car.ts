import { Sell } from '@prisma/client';

const isString=(el:any):boolean=>{
    return typeof el==="string"?true:false
}

const isNumber=(el:any):boolean=>{
    return typeof el==="number"?true:false
}

const parseProductId=(param:any):string=>{
    if(!param)throw new Error("Enter a product ID")
  if(isString(param))return param
  throw new Error("invalid product ID")
  
  }

const parseUserId=(param:any):string=>{
    if(!param)throw new Error("Enter a user ID")
  if(isString(param))return param
  throw new Error("invalid user ID")
  
  }

const parseAmount=(param:any):number=>{
    if(!param)param=1
  if(isNumber(param) && param>=0)return param
  throw new Error("invalid an amount")
  
  }

export const parseSell=(param:any):Omit<Sell,"id"|"carId"|"status">=>{
    const newSell={
        productId:parseProductId(param.productId),
        amount:parseAmount(param.amount),
        userId:parseUserId(param.userId)
    }
    return newSell
}