const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { createBook } = require("./controllers");
const { bookFactory } = require("./entities");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// listen for requests
app.listen(8088, async () => {
  console.log(bookFactory({
    name: "boom boom pow",
    author: "sara jessica parker",
  }))


  await createBook({
      name: "boom boom pow",
      author: "sara jessica parker",
    }
  );
  console.log("Server is listening on port 8088");
});

module.exports = app;
