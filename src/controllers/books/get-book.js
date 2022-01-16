const setupGetBook = ({ bookFactory, booksDb }) => {
  const getBook = async ({ id }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findById({ id });
    return bookFactory(book);
  };

  return getBook;
};

module.exports = setupGetBook;
