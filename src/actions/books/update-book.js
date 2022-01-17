const setupUpdateBook = ({ bookFactory, booksDb }) => {
  const updateBook = async ({ id, ...data }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findOne({ id });
    if (!book) {
      return null;
    }
    const updatedBook = bookFactory({ ...book, ...data });
    await booksDb.update({id, ...updatedBook });
    return updateBook;
  };

  return updateBook;
};

module.exports = setupUpdateBook;
