const setupPatchBook = ({ updateBook }) => {
  const patchBook = async (req, res) => {
    const data = {
      ...req.body,
      id: req.params.id,
    };

    try {
      const book = await updateBook({
        id: req.query.id,
        ...data,
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
  return patchBook;
};

module.exports = setupPatchBook;
