const setupPostBook = ({ addBook }) => {
  const postBook = async (req, res) => {
    try {
      const book = await addBook({
        ...req.body,
      });
      res.send({
        status: 200,
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
  return postBook;
};

module.exports = setupPostBook;
