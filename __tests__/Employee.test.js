const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Constructor", () => {
    it("should should return an object with the properties 'name', 'id' and 'email' when called with 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });
  });
});

describe("methodsForEmployee", () => {
  const name = "Marie";
  const id = "5";
  const email = "marie@test.com";

  it("should return the employee's name", () => {
    const obj = new Employee(name, id, email);
    expect(obj.getName()).toEqual(name);
  });

  it("should return the employee's id", () => {
    const obj = new Employee(name, id, email);
    expect(obj.getId()).toEqual(id);
  });

  it("should return the employee's email address", () => {
    const obj = new Employee(name, id, email);
    expect(obj.getEmail()).toEqual(email);
  });

  it("should return the employee's role", () => {
    const obj = new Employee(name, id, email);
    expect(obj.getRole()).toEqual("Employee");
  });
});

//!Keeping older code version as reference
// describe("getName()", () => {
//   it("should return the employee's name", () => {
//     const name = "Marie";
//     const id = "5";
//     const email = "marie@test.com";
//     const obj = new Employee(name, id, email);
//     expect(obj.name).toEqual(name);
//   });
// });

// describe("getID", () => {
//   it("should return the employee's id", () => {
//     const name = "Marie";
//     const id = "5";
//     const email = "marie@test.com";
//     const obj = new Employee(name, id, email);
//     expect(obj.id).toEqual(id);
//   });
// });

// describe("getEmail", () => {
//   it("should return the employee's email address", () => {
//     const name = "Marie";
//     const id = "5";
//     const email = "marie@test.com";
//     const obj = new Employee(name, id, email);
//     expect(obj.email).toEqual(email);
//   });
// });

//test for role
