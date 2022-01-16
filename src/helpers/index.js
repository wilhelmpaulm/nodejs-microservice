const ISBN = require("isbn").ISBN;
const isbnValidatorFactory = require("./is-valid-isbn");
const cuid = require("cuid");
const idFactory = require("./id");

const isValidIsbn = isbnValidatorFactory({ ISBN });

const id = idFactory({ cuid });
const { generateId, isValidId } = id;

module.exports = {
  isValidIsbn,
  id,
  generateId,
  isValidId,
};
