import Book from "./Book.js";

//title,subject,author, paes,color,bookOpen,datePublished

const cookBook = new Book(
  "Nigella's Sweet Treats",
  "Cooking",
  "Nigella",
  250,
  "red",
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The new book on the shelf is a:", cookBook.subject, "book");
console.log("The Title of the book is:", cookBook.title);
console.log("This book has been released:", cookBook.datePublished);

const mysteryBook = new Book(
  "Murder in the dark",
  "Murder Mystery",
  "Sam Smith",
  380,
  "grey",
  false,
  "December 21, 2022 15:00:00 PST"
);

console.log("The new book on the shelf is a:", mysteryBook.subject, "book");
console.log(
  "The Title of the book is:",
  mysteryBook.title,
  "written by",
  mysteryBook.author,
  "it has been released for",
  mysteryBook.bookAge()
);
