const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Constructor", () => {
    it("should return an object with the properties 'name', 'id', 'email' and 'school' when called with 'new' keyword", () => {
      const obj = new Intern();

      //test for name from Employee class as well
      expect("name" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });
  });
});

describe("methodsForIntern", () => {
  const name = "Susanne";
  const id = "8";
  const email = "susanne@test.com";
  const school = "Humboldt University Berlin";

  //doing the additional test for getName()
  it("should return the Intern's name", () => {
    const obj = new Intern(name, id, email, school);
    expect(obj.getName()).toEqual(name);
  });

  it("should return the intern's role", () => {
    const obj = new Intern(name, id, email, school);
    expect(obj.getRole()).toEqual("Intern");
  });
});
