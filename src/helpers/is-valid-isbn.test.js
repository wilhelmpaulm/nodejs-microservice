const { isValidIsbn } = require("./index");

describe("is-valid-isbn", () => {
  it("returns false on invalid format", () => {
    expect(isValidIsbn("sample-string")).toBe(false);
  });

  it("returns true on ISBN 10", () => {
    expect(isValidIsbn("1-933988-03-7")).toBe(true);
  });

  it("returns true on ISBN 13", () => {
    expect(isValidIsbn("978-4-87311-336-4")).toBe(true);
  });
});
