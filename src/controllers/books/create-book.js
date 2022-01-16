const setupCreateBook = ({ bookFactory, booksDb }) => {
  const addBook = async (data) => {
    const book = bookFactory(data);
    return booksDb.insert(book);
  };

  return addBook;
};

module.exports = setupCreateBook;
