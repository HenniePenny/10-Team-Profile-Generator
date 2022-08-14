const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Constructor", () => {
    it("should should return an object with the properties 'name', 'id' and 'email' when called with 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
      const name = "Marie";

      const obj = new Employee(name);

      expect(obj.name).toEqual(name);
    });
  });
  //! Create separate tests for getName, getID and getEmail
});
