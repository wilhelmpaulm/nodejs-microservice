const { bookFactory } = require("./../entities");
const booksDb = require("./../storage");

const setupCreateBook = require("./books/create-book");
const setupDeleteBook = require("./books/delete-book");
const setupGetBook = require("./books/get-book");
const setupGetBooks = require("./books/get-books");
const setupUpdateBook = require("./books/update-book");

const createBook = setupCreateBook({ bookFactory, booksDb });
const getBooks = setupGetBooks({ bookFactory, booksDb });
const getBook = setupGetBook({ bookFactory, booksDb });
const updateBook = setupUpdateBook({ bookFactory, booksDb });
const deleteBook = setupDeleteBook({ booksDb });

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
