import { Category } from './enum';
import { Book, FP } from './ibook';

class MyBook implements Book {
    id:number;
    author:string;
    title:string;
    cat:Category = Category.Fiction;
    foo:(text:string)=>void;
    bar:FP;
}

let fp:FP = t => {};

let book1:Book =  { id: 1, title: "Ulysses", author: "James Joyce", cat: Category.Fiction, foo: (n)=> {} };
let book2:Book =  { id: 1, title: "Ulysses", cat: Category.Fiction, foo: (n)=> {}, bar: fp };
let book3 = { id: 1, title: "Ulysses", cat: Category.Fiction, foo: (n)=> {}, bar: fp, extra: true };
let book4:MyBook = new MyBook();

function logBook(header:string, book: Book) {
    console.log(`${header}: ${book}`, book);
}

logBook("book1", book1);
logBook("book2", book2);
logBook("book3", book3);
logBook("book4", book4);
