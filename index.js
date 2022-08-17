const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./lib/GenerateHTML");
//!these are showing up out of nowhere?
const { Console } = require("console");
const { inherits } = require("util");
const newTeam = [];

//*make choice of new colleague first, then loop back to this question after each new colleague
const questions = [
  {
    type: "list",
    name: "position",
    message: chalk.yellow("Please create a new position or quit."),
    choices: ["Manager", "Engineer", "Intern", "quit"],
  },
];

//*question set for the Manager, should go back to questions afterwards, for new choice of colleague
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
  {
    type: "list",
    name: "nextPosition",
    message: chalk.yellow("Please create a new position or quit."),
    choices: ["Engineer", "Intern", "quit"],
  },
];

//*questions for engineer, should go back to questions afterwards, for new choice of colleague
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
  {
    type: "list",
    name: "nextPosition",
    message: chalk.yellow("Please create a new position or quit."),
    choices: ["Engineer", "Intern", "quit"],
  },
];

//*questions for intern, should go back to questions afterwards, for new choice of colleague
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
  {
    type: "list",
    name: "nextPosition",
    message: chalk.yellow("Please create a new position or quit."),
    choices: ["Engineer", "Intern", "quit"],
  },
];

//*create new Manager object according to user input and call init function to write to html file
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
  // init();
  // getQuestions();
};

//*create new Engineer object according to user input and call init function to write to html file
const getEngineer = () => {
  inquirer.prompt(questionsEngineer).then((answersEngineer) => {
    console.log(answersEngineer);
    const generatedEngineer = new Engineer(
      answersEngineer.nameEngineer,
      answersEngineer.idEngineer,
      answersEngineer.emailEngineer,
      answersEngineer.github
    );
    newTeam.push(generatedEngineer);
    switch (answersEngineer.nextPosition) {
      case "Engineer":
        getEngineer();
        break;

      case "Intern":
        getIntern();
        break;

      case "quit":
        // writeHtmlFile();
        // inProgress = false;
        break;

      default:
        // inProgress = false;
        break;
    }
  });
  // init();
  // getQuestions();
};

const getIntern = () => {
  inquirer.prompt(questionsIntern).then((answersIntern) => {
    console.log(answersIntern);
    const generatedIntern = new Intern(
      answersIntern.nameIntern,
      answersIntern.idIntern,
      answersIntern.school
    );
    newTeam.push(generatedIntern);
    switch (answersIntern.nextPosition) {
      case "Engineer":
        getEngineer();
        break;

      case "Intern":
        getIntern();
        break;

      case "quit":
        // writeHtmlFile();
        // inProgress = false;
        break;

      default:
        // inProgress = false;
        break;
    }
  });
  // init();
  // getQuestions();
};

//When user quits, the html file should be created
const writeHtmlFile = (htmlFile) => {
  fs.writeFile("./dist/index.html", htmlFile, (err) =>
    err
      ? console.log(err)
      : console.log(chalk.bgYellow("Your HTML file was created!"))
  );
};

const getQuestions = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answerChoice);
  });
};
// getChoice();

// let inProgress = true;

const init = () => {
  inquirer.prompt(questionsManager).then((answersManager) => {
    console.log(answersManager);
    switch (answersManager.nextPosition) {
      // case "Manager":
      //   getManager();
      //   break;

      case "Engineer":
        getEngineer();
        break;

      case "Intern":
        getIntern();
        break;

      case "quit":
        writeHtmlFile();
        // inProgress = false;
        break;

      default:
        // inProgress = false;
        break;
    }
  });
  // .then((answers) => {
  //   const htmlFile = generateHTML(answers);
  //   writeHtmlFile(htmlFile);
  // });
  //Todo: Do I need to catch any errors here?
};

init();
