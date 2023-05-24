const Book = require('../models/book');

const controller = {
    save: (req, res, next) => {
        const addedBook = new Book(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
        res.status(201).json(addedBook);
    },

    getAll: (req, res, next) => {
        res.status(200).json(Book.getAll());
    },

    deleteById: (req, res, next) => {
        let deletedBook = Book.deleteById(req.params.bookId)
        if (deletedBook.message == undefined)
            res.status(200).json(deletedBook);
        else
            res.status(404).json(deletedBook);
    },

    edit: (req, res) => {
        const editedBook = new Book(req.params.bookId, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).edit();
        if (editedBook.message == undefined)
            res.status(200).json(editedBook);
        else
            res.status(404).json(editedBook);
    }
}

module.exports = controller;