const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { createBook, updateBook, getBook, deleteBook } = require("./controllers");
const { bookFactory } = require("./entities");
const { generateId } = require("./helpers");
const { findAll, findOne } = require("./storage");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// listen for requests
app.listen(8088, async () => {
  console.log(await getBook({ id: "ckyhw6ryy000220ti6yg56yu5" }));
  console.log(await deleteBook({ id: "ckyhw6ryy000220ti6yg56yu5" }));
  console.log(await getBook({ id: "ckyhw6ryy000220ti6yg56yu5" }));
  console.log("Server is listening on port 8088");
});

module.exports = app;
