/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Book from "./Book.js";

const b1 = new Book(
    "Everyday Backpack",
    "Harry Potter",
    "J K Rowling",
    "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", b1);
console.log("Date Published:", b1.datePublished);
console.log("Day since Published:", b1.bookAge());