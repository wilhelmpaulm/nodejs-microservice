const setupDeleteBook = ({ booksDb }) => {
  const deleteBook = async ({ id }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findById({ id });
    return commentsDb.remove(book);
  };

  return deleteBook;
};

module.exports = setupDeleteBook;
