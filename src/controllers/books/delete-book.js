const setupDeleteBook = ({ booksDb }) => {
  const deleteBook = async ({ id }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findOne({ id });
    return booksDb.remove(book);
  };

  return deleteBook;
};

module.exports = setupDeleteBook;
