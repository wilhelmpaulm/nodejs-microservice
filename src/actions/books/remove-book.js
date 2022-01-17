const setupRemoveBook = ({ booksDb }) => {
  const removeBook = async ({ id }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findOne({ id });
    return booksDb.remove(book);
  };

  return removeBook;
};

module.exports = setupRemoveBook;
