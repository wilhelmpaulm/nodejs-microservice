const setupGetBooks = ({ findBooks, isValidId, isValidIsbn }) => {
  const getBooks = async (req, res) => {
    try {
      const query = validateQuery(req.query);
      const books = await findBooks({ query });
      res.send({
        status: 200,
        body: books,
      });
    } catch (e) {
      console.log(e);
      res.status(400);
      res.send({
        status: 400,
        error: e.message,
      });
    }
  };

  const validateQuery = ({ id, name, author, publisher, isbn, keywords }) => {
    const cleanQuery = {};
    if (id && isValidId(id)) {
      cleanQuery.id = id;
    }
    if (isbn && isValidIsbn(isbn)) {
      cleanQuery.isbn = isbn;
    }
    if (name) cleanQuery.name = name;
    if (author) cleanQuery.author = author;
    if (publisher) cleanQuery.publisher = publisher;
    if (keywords) cleanQuery.keywords = keywords.split(" ");

    return cleanQuery;
  };
  return getBooks;
};

module.exports = setupGetBooks;
