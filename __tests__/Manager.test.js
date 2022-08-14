const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Constructor", () => {
    it("should should return an object with the properties 'name', 'id', 'email' and 'officeNumber' when called with 'new' keyword", () => {
      const obj = new Manager();

      //test for name from Employee class as well
      expect("name" in obj).toEqual(true);
      expect("officeNo" in obj).toEqual(true);
    });
  });
});

describe("methodsForManager", () => {
  const name = "Marie";
  const id = "5";
  const email = "marie@test.com";
  const officeNo = "mariecoding";

  //doing the additional test for getName()
  it("should return the Manager's name", () => {
    const obj = new Manager(name, id, email, officeNo);
    expect(obj.getName()).toEqual(name);
  });

  it("should return the manager's role", () => {
    const obj = new Manager(name, id, email, officeNo);
    expect(obj.getRole()).toEqual("Manager");
  });
});
