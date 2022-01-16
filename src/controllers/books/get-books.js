const setupGetBooks = ({ bookFactory, booksDb }) => {
  const getBooks = async ({} = {}) => {
    const books = await booksDb.findAll();
    return books.map((data) => bookFactory(data));
  };

  return getBooks;
};

module.exports = setupGetBooks;
