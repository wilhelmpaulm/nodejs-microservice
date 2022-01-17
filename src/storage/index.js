const booksDbFactory = require('./books-db.js')
const { MongoClient } = require("mongodb");

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbFactory = async () => {
  await client.connect();
  return client.db("dev");
};

const booksDb = booksDbFactory({ dbFactory });
module.exports = booksDb;
