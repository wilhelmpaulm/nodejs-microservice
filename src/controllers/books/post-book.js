const setupPostBook = ({ addBook }) => {
  const postBook = async (req, res) => {
    try {
      const book = await addBook({
        ...req.body
      });
      res.send({
        body: book,
      });
    } catch (e) {
      console.log(e);
      res.status(400);
      res.send({
        error: e.message,
      });
    }
  };
  return postBook;
};

module.exports = setupPostBook;
