const setupUpdateBook = ({ bookFactory, booksDb }) => {
  const updateBook = async ({ id, data }) => {
    if (!id) {
      throw new Error("ID is required.");
    }
    const book = await booksDb.findById({ id });
    const updatedBook = bookFactory({ ...book, ...data });
    await booksDb.update({ ...updatedBook });
    return updateBook;
  };

  return updateBook;
};

module.exports = setupUpdateBook;
