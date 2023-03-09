

import { User } from "@prisma/client"
import bcrypt from "bcrypt"

const isString=(el:any):boolean=>{
    return typeof el==="string"?true:false
}
const parseEmail=(param:any):string=>{
    if(!param)throw new Error("Enter an email")
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!param.match(validRegex)) throw new Error("invalid email")
    return param
    
}
const parseName=(param:any):string=>{
    if(!param)throw new Error("Enter a name")
    if(isString(param))return param
    throw new Error("invalid name")
}
export const hashPassword=async(password:string)=>{
    const hashPassword=await bcrypt.hash(password,10)
    return hashPassword
}
const parsePassword=(param:any):string=>{
    if(!param)throw new Error("Enter a password")
    var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!param.match(validRegex)) throw new Error("The password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")

        
    return param
   
}

export const parseNewUser=(param:any):Omit<User,"id" | "address"|"photo">=>{
    const newUser={
        name:parseName(param.name),
        email:parseEmail(param.email),
        password:parsePassword(param.password)
    }
    return newUser
}
export const parseLoginUser=(param:any):Pick<User,"email" | "password">=>{
    const newUser={
        email:parseEmail(param.email),
        password:parsePassword(param.password)
    }
    return newUser
}