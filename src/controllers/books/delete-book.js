const setupDeleteBook = ({ findBook, removeBook }) => {
  const deleteBook = async (req, res) => {
    try {
      const book = await removeBook({
        id: req.params.id,
      });

      res.status(book == null ? 404 : 200);
      res.send({
        status: book == null ? 404 : 200,
        body: book,
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
  return deleteBook;
};

module.exports = setupDeleteBook;
