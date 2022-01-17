const setupPatchBook = ({ updateBook }) => {
  const patchBook = async (req, res) => {
    const data = {
      ...req.body,
      id: req.params.id,
    };

    try {
      const book = await updateBook({
        id: req.params.id,
        ...data,
      });

      if (book == null) {
        res.send({
          status: 404,
          body: null,
        });
      }

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
  return patchBook;
};

module.exports = setupPatchBook;
