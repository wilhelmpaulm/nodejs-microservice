const setupBookFactory = ({ isValidIsbn, isValidId, generateId }) => {
  const bookFactory = ({
    id = generateId(),
    name,
    author,
    published = "",
    publisher = "",
    isbn = "",
    desc = "",
    pageCount = 0,
    keywords = "",
  } = {}) => {
    if (!isValidId(id)) {
      throw new Error("ID must be valid.");
    }

    if (name.length < 3) {
      throw new Error("Book name name must be longer than 3 characters.");
    }

    if (isbn != "" && !isValidIsbn(isbn)) {
      throw new Error("ISBN must be in the valid format.");
    }

    if (author.length < 3) {
      throw new Error("Author's name must be longer than 3 characters.");
    }

    return Object.freeze({
      id,
      name,
      author,
      published,
      publisher,
      isbn,
      desc,
      pageCount,
      keywords,
      // getName: () => name,
      // getAuthor: () => author,
      // getPublisher: () => publisher,
      // getPublished: () => published,
      // getIsbn: () => isbn,
      // getDesc: () => desc,
      // getPageCount: () => pageCount,
      // getKeyWords: () => keywords,
    });
  };

  return bookFactory;
};

module.exports = setupBookFactory;
