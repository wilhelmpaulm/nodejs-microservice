const idFactory = ({ cuid }) => {
  const generateId = cuid;
  const isValidId = cuid.isCuid;

  return {
    generateId,
    isValidId,
  };
};

module.exports = idFactory;
