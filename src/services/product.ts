import { Book, Product, Store } from "@prisma/client"

const isString=(el:any):boolean=>{
    return typeof el==="string"?true:false
}
const isNumber=(el:any):boolean=>{
    return typeof el==="number"?true:false
}
const parseISBN=(param:any):string=>{
  if(!param)throw new Error("Enter a ISBN")
  if(isString(param))return param
  throw new Error("invalid ISBN")
  
}
const parseCode=(param:any):string=>{
  if(!param)throw new Error("Enter a Code")
  if(isString(param))return param
  throw new Error("invalid Code")
  
}
const parseTitle=(param:any):string=>{
    if(!param)throw new Error("Enter a title")
  if(isString(param))return param
  throw new Error("invalid title")
  
}
const parseName=(param:any):string=>{
  if(!param)throw new Error("Enter a name")
if(isString(param))return param
throw new Error("invalid name")

}
const parseAuthor=(param:any):string=>{
    if(!param)throw new Error("Enter a author")
  if(isString(param))return param
  throw new Error("invalid author")
  
}
const parseEditorial=(param:any):string=>{
    if(!param)throw new Error("Enter a editorial")
  if(isString(param))return param
  throw new Error("invalid editorial")
  
}
const parseProductId=(param:any):string=>{
  if(!param)throw new Error("Enter a product ID")
if(isString(param))return param
throw new Error("invalid product ID")

}
const parsePrice=(param:any):number=>{
    if(!param)throw new Error("Enter a price")
  if(isNumber(param))return param
  throw new Error("invalid price")
  
}
const parseAmount=(param:any):number=>{
  if(!param)throw new Error("Enter an amount")
if(isNumber(param) && param>=0)return param
throw new Error("invalid an amount")

}
export const parseBook=(param:any):Omit<Book,"id">=>{
const newBook={
    
    title:parseTitle(param.title),
    author:parseAuthor(param.author),
    editorial:parseEditorial(param.editorial),
    price:parsePrice(param.price),
    isbn:parseISBN(param.isbn)

}
return newBook

}

export const parseProduct=(param:any):Omit<Product,"id">=>{
  const newProduct={
      
      name:parseName(param.name),
      price:parsePrice(param.price),
      code:parseCode(param.code),
      

  
  }
  return newProduct
  
  }

  export const parseModifyProduct=(param:any):Pick<Store,"productId"|"amount">=>{
    const modifyProduct={
        productId:parseProductId(param.productId),
        amount:parseAmount(param.amount)
    }
    return modifyProduct
  }