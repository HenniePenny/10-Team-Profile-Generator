const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Constructor", () => {
    it("should should return an object with the properties 'name', 'id', 'email' and 'gitHubUsername' when called with 'new' keyword", () => {
      const obj = new Engineer();

      //test for name from Employee class as well
      expect("name" in obj).toEqual(true);
      expect("gitHubUsername" in obj).toEqual(true);
    });
  });
});

describe("methodsForEngineer", () => {
  const name = "Marie";
  const id = "5";
  const email = "marie@test.com";
  const gitHubUsername = "mariecoding";

  //doing the additional test for getName()
  it("should return the engineer's name", () => {
    const obj = new Engineer(name, id, email, gitHubUsername);
    expect(obj.getName()).toEqual(name);
  });

  it("should return the engineer's GitHub username", () => {
    const obj = new Engineer(name, id, email, gitHubUsername);
    expect(obj.getGitHubUsername()).toEqual(gitHubUsername);
  });

  it("should return the engineer's role", () => {
    const obj = new Engineer(name, id, email, gitHubUsername);
    expect(obj.getRole()).toEqual("Engineer");
  });
});
