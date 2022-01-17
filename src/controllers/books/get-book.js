const setupGetBook = ({ findBook }) => {
  const getBook = async (req, res) => {
    try {
      const book = await findBook({
        id: req.params.id,
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
  return getBook;
};

module.exports = setupGetBook;
