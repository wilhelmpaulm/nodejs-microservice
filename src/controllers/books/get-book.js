const setupGetBook = ({ findBook }) => {
  const getBook = async (req, res) => {
    try {
      const book = await findBook({
          id: req.query.id
      });
      res.send({
          body: book
      })
    } catch (e) {
        console.log(e);
        res.status(400);
        res.send({
          error: e.message,
        });
    }
  };
  return getBook;
};

module.exports = setupGetBook;
