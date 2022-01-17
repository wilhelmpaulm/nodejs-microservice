const setupGetBooks = ({ findBooks }) => {
  const getBooks = async (req, res) => {
    try {
      const books = await findBooks();
      res.send({
        body: books,
      });
    } catch (e) {
      console.log(e);
      res.status(400);
      res.send({
        error: e.message,
      });
    }
  };
  return getBooks;
};

module.exports = setupGetBooks;
