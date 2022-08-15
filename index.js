const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./lib/GenerateHTML");

//question or the Manager is the first set of questions, asked only once according to acceptance criteria
const questionsManager = [
  {
    type: "input",
    name: "nameManager",
    message: chalk.green("Please type in the Manager's name:"),
  },
  {
    type: "input",
    name: "idManager",
    message: chalk.green("Please type in the Manager's employee ID number:"),
  },
  {
    type: "input",
    name: "emailManager",
    message: chalk.green("Please type in the Manager's email address:"),
  },
  {
    type: "input",
    name: "officeNoManager",
    message: chalk.green("Please type in the Manager's office number:"),
  },
];

//choice to make after adding manager, loop back to this question after engineer or intern
const questionsChoice = [
  {
    type: "list",
    name: "addColleague",
    message: chalk.yellow("Please add another team member or quit."),
    choices: ["Engineer", "Intern", "quit"],
  },
];

//questions for engineer, should go back to questionsChoice afterwards
const questionsEngineer = [
  {
    type: "input",
    name: "nameEngineer",
    message: chalk.magenta("Please type in the Engineer's name:"),
  },
  {
    type: "input",
    name: "idEngineer",
    message: chalk.magenta("Please type in the Engineer's ID number:"),
  },
  {
    type: "input",
    name: "emailEngineer",
    message: chalk.magenta("Please type in the Engineer's email address:"),
  },
  {
    type: "input",
    name: "github",
    message: chalk.magenta("Please type in the Engineer's GitHub username:"),
  },
];

//questions for intern, should go back to questionsChoice afterwards
const questionsIntern = [
  {
    type: "input",
    name: "nameIntern",
    message: chalk.blue("Please type in the Intern's name:"),
  },
  {
    type: "input",
    name: "idIntern",
    message: chalk.blue("Please type in the Intern's ID number:"),
  },
  {
    type: "input",
    name: "school",
    message: chalk.blue("Please type in the Intern's school:"),
  },
];

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
