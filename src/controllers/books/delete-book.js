const setupDeleteBook = ({ removeBook }) => {
  const deleteBook = async (req, res) => {
    try {
      const book = await removeBook({
        id: req.params.id,
      });
      res.status(deleted.deletedCount === 0 ? 404 : 200);
      res.send({
        body: { book },
      });
    } catch (e) {
      console.log(e);
      res.status(400);
      res.send({
        error: e.message,
      });
    }
  };
  return deleteBook;
};

module.exports = setupDeleteBook;
