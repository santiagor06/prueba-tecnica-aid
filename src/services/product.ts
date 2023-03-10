import { Book, Product } from "@prisma/client"

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
const parsePrice=(param:any):number=>{
    if(!param)throw new Error("Enter a price")
  if(isNumber(param))return param
  throw new Error("invalid price")
  
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
      
      name:parseTitle(param.name),
      price:parsePrice(param.price),
      code:parseCode(param.code),
      

  
  }
  return newProduct
  
  }