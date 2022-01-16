const isbnValidatorFactory = ({ISBN})=>  {
  return (isbn) => {
    const isbn10a = ISBN.parse(isbn);
    if (isbn10a == null) return false;
    return isbn10a.isIsbn10() || isbn10a.isIsbn13();
  };
}


module.exports = isbnValidatorFactory;
