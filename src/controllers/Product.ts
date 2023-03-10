import { Book } from "@prisma/client";
import { parseBook } from '../services/product';
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