const booksDbFactory = ({ dbFactory }) => {
  const findAll = async ({ query } = {}) => {
    const db = await dbFactory();
    const result = await db.collection("books").find(query);
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }));
  };

  const findOne = async ({ id: _id }) => {
    const db = await dbFactory();
    const result = await db.collection("books").find({ _id });
    const found = await result.toArray();
    if (found.length === 0) {
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info };
  };

  const insert = async ({ id: _id, ...data }) => {
    const db = await dbFactory();
    const result = await db.collection("books").insertOne({ _id, ...data });
    if (!result.insertedId) {
      return null;
    }
    return { id: _id, ...data };
  };

  const update = async ({ id: _id, ...data }) => {
    const db = await dbFactory();
    const result = await db
      .collection("books")
      .updateOne({ _id }, { $set: { ...data } });
    return result.modifiedCount > 0 ? { id: _id, ...data } : null;
  };

  const remove = async ({ id: _id }) => {
    const db = await dbFactory();
    const result = await db.collection("books").deleteOne({ _id });
    return !!result.deletedCount;
  };

  return Object.freeze({
    findAll,
    findOne,
    insert,
    remove,
    update,
  });
};

module.exports = booksDbFactory;
