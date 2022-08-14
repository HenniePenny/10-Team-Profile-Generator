const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
// const Engineer =
// const Manager =
// const Intern =

//! const questionsManager - start with manager questions, then loop over the other employees
const questions = [
  {
    name: "position",
    type: "list",
    message: "Please choose your team member's position or quit.",
    choices: ["Manager", "Engineer", "Intern", "quit"],
  },
];

const questionsEngineer = [
  {
    name: "nameEngineer",
    type: "input",
    message: "Please type in the Engineer's name",
  },
];

// const questionsIntern

let inProgress = true;

const init = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    switch (answers.position) {
      case "Engineer":
        inquirer.prompt(questionsEngineer).then((answersEngineer) => {
          console.log(answersEngineer);
        });
        break;

      case "quit":
        inProgress = false;
        break;

      default:
        inProgress = false;
        break;
    }
  });
};
init();

//!do a while loop here ???
