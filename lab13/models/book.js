let db = [];
let counter = 0;

module.exports = class Product {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = ++counter; //start with 1;
        db.push(this);
        return this;
    }

    edit() {
        const index = db.findIndex(book => book.id == this.id);
        if (index > -1) {
            db.splice(index, 1, this);
            return this;
        }
        else return { message: "Could not update it." }
    }



    static getAll() {
        return db;
    }

    static deleteById(bookId) {
        const index = db.findIndex(book => book.id == bookId);
        if (index > -1) {
            const deletedBook = db[index];
            db.splice(index, 1);
            return deletedBook;
        }
        else return { message: "Could not delete it." }
    }

}