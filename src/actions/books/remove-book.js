const { bookFactory } = require("../../entities");

const setupRemoveBook = ({ booksDb }) => {
  const removeBook = async ({ id }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findOne({ id });

    if (book == null) {
      return null;
    }
    if (await booksDb.remove({ id: book.id })) {
      return bookFactory(book);
    }
    return null;
  };

  return removeBook;
};

module.exports = setupRemoveBook;
