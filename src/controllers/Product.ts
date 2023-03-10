import { Book, Product, Store } from "@prisma/client";
import { parseBook, parseProduct, parseModifyProduct } from '../services/product';
import { db } from "../utils/db.server";

export const createBook=async(book:any):Promise<Book>=>{
    
const {price,title,isbn,author,editorial}=parseBook(book)
const newBook=await db.book.create({
    data:{
        price,
        title,
        isbn,
        author,
        editorial
    }
})
await db.store.create({
    data:{
        category:"book",
        name:newBook.title,
        productId:newBook.id,
        
    }
})
return newBook
}

export const createProduct=async(book:any):Promise<Product>=>{
    
    const {price,name,code}=parseProduct(book)
    const newProduct=await db.product.create({
        data:{
            price,
            name,
            code
        }
    })
    await db.store.create({
        data:{
            category:"other",
            name:newProduct.name,
            productId:newProduct.id,
            
        }
    })
    return newProduct
    }

export const modifyProduct=async(product:any):Promise<Store>=>{
    const {productId,amount}=parseModifyProduct(product)

    const newProduct=await db.store.update({
        where:{
            productId
        },
        data:{
            amount
        }
    })
return newProduct
}    
export const getProducts=async():Promise<Array<Store>>=>{

    const products=await db.store.findMany({})
    return products

}