const setupFindBooks = ({ bookFactory, booksDb }) => {
  const findBooks = async ({} = {}) => {
    const books = await booksDb.findAll();
    return books.map((data) => bookFactory(data));
  };

  return findBooks;
};

module.exports = setupFindBooks;
