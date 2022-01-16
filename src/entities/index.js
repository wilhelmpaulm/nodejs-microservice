const setupBookFactory = require("./book");

const { isValidId, isValidIsbn, generateId } = require("./../helpers");

const bookFactory = setupBookFactory({ isValidIsbn, isValidId, generateId });

module.exports = { bookFactory };
