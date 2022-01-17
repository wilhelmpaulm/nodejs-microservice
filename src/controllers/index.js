const {
  removeBook,
  findBook,
  findBooks,
  updateBook,
  addBook,
} = require("./../actions");

const { isValidId, isValidIsbn } = require("./../helpers");

const setupDeleteBook = require("./books/delete-book");
const setupGetBook = require("./books/get-book");
const setupGetBooks = require("./books/get-books");
const setupPostBook = require("./books/post-book");
const setupPatchBook = require("./books/patch-book");

const deleteBook = setupDeleteBook({ findBook, removeBook });
const getBook = setupGetBook({ findBook });
const getBooks = setupGetBooks({ findBooks, isValidId, isValidIsbn });
const postBook = setupPostBook({ addBook });
const patchBook = setupPatchBook({ updateBook });

module.exports = {
  deleteBook,
  getBook,
  getBooks,
  postBook,
  patchBook,
};
