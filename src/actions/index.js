const { bookFactory } = require("./../entities");
const booksDb = require("./../storage");

const setupAddBook = require("./books/add-book");
const setupRemoveBook = require("./books/remove-book");
const setupFindBook = require("./books/find-book");
const setupFindBooks = require("./books/find-books");
const setupUpdateBook = require("./books/update-book");

const addBook = setupAddBook({ bookFactory, booksDb });
const findBooks = setupFindBooks({ bookFactory, booksDb });
const findBook = setupFindBook({ bookFactory, booksDb });
const updateBook = setupUpdateBook({ bookFactory, booksDb });
const removeBook = setupRemoveBook({ booksDb });

module.exports = {
  addBook,
  findBooks,
  findBook,
  updateBook,
  removeBook,
};
