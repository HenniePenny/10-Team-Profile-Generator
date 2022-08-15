const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./lib/GenerateHTML");
const { inherits } = require("util");
const newTeam = [];

//*make choice of new colleague first, then loop back to this question after engineer or intern
const questions = [
  {
    type: "list",
    name: "position",
    message: chalk.yellow("Please create a new position or quit."),
    choices: ["Manager", "Engineer", "Intern", "quit"],
  },
];

//*question or the Manager is the first set of questions, asked only once according to acceptance criteria
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

//*questions for engineer, should go back to questionsChoice afterwards
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

//*questions for intern, should go back to questionsChoice afterwards
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

const getManager = () => {
  inquirer.prompt(questionsManager).then((answersManager) => {
    console.log(answersManager);
    const generatedManager = new Manager(
      answersManager.nameManager,
      answersManager.idManager,
      answersManager.emailManager,
      answersManager.officeNoManager
    );
    newTeam.push(generatedManager);
  });
  init();
};

// const getQuestions = () => {
//   inquirer.prompt(questionQuestions).then((answerQuestions) => {
//     console.log(answerChoice);
//     const generatedChoice = new Choice(answerChoice.addColleague);
//     newTeam.push(generatedChoice);
//   });
// };
// getChoice();

// let inProgress = true;

// const init = () => {
//   inquirer.prompt(questions).then((answers) => {
//     console.log(answers);
//     switch (answers.position) {
//       case "Manager":
//         getManager();
//         break;

// case "quit":
//   inProgress = false;
//   break;

// default:
//   inProgress = false;
//   break;
//     }
//   });
// };
// init();
