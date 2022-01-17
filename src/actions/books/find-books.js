const setupFindBooks = ({ bookFactory, booksDb }) => {
  const findBooks = async ({...query} = {}) => {
    const books = await booksDb.findAll({...query});
    return books.map((data) => bookFactory({...data}));
  };

  return findBooks;
};

module.exports = setupFindBooks;
