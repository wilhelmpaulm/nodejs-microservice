const setupFindBook = ({ bookFactory, booksDb }) => {
  const findBook = async ({ id }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findOne({ id });
    if (book) {
      return bookFactory(book);
    }
    return null;
  };

  return findBook;
};

module.exports = setupFindBook;
