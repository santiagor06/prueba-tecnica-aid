import { Book, Product } from "@prisma/client";
import { parseBook, parseProduct } from '../services/product';
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
            
        }
    })
    return newProduct
    }