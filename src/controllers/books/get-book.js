const setupGetBook = ({ bookFactory, booksDb }) => {
  const getBook = async ({ id }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findOne({ id });
    if (book) {
      return bookFactory(book);
    }
    return null;
  };

  return getBook;
};

module.exports = setupGetBook;
