const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const {
  postBook,
  deleteBook,
  patchBook,
  getBook,
  getBooks,
} = require("./controllers");

const app = express();

// from https://expressjs.com/en/advanced/best-practice-security.html
app.disable("x-powered-by");
app.use(helmet());

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post(`books`, postBook);
app.delete(`books/:id`, deleteBook);
app.patch(`books/:id`, patchBook);
app.get(`books/:id`, getBook);
app.get(`books`, getBooks);

// handle calls to invalid routes
app.use(function (req, res) {
  res.status(404);
});

app.listen(8088, async () => {
  console.log("Server is listening on port 8088");
});

module.exports = app;
