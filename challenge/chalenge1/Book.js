class Book {
    constructor(name, author, publisher, datePublished) {
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.datePublished = datePublished;
    }
    bookAge() {
        let now = new Date();
        let published = new Date(this.datePublished);
        let elapsed = now - published; // elapsed time in milliseconds
        return Math.floor(elapsed / (1000 * 3600 * 24));
    }
}

export default Book;