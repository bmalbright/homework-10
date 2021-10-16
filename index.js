// prompt function 
// switch function for employee class (manager, intern, engineer)

//name
//

const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js")
const createHTML


// Creates an array of questions about employees
const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of the team member?",
      validate: isValid
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's employee id number?",
      validate: isValid
    },
    {
      type: "input",
      name: "email",
      message: "What is the team member's email address?",
      validate: isValid
    },
    {
      type: "list",
      name: "employeeType",
      message: "Is the employee a manager, an engineer or an intern.",
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      when: (data) => data.employeeType == "Manager",
      type: "input",
      name: "office",
      message: "What is the manager's office number?",
      validate: isValid
     
    },
    {
      when: (data) => data.employeeType == "Engineer",
      type: "input",
      name: "github",
      message: "What is the engineer's github username?",
      validate: isValid

  },
  {
      when: (data) => data.employeeType == "Intern",
      type: "input",
      name: "college",
      message: "What college/university does the intern attend?",
      validate: isValid
  },
  {
      type: "list",
      name: "continue",
      choices: ['yes', 'no'],
      message: "Do you wish to add another employee?",
      validate: response=>{
        if(response.choices==="yes") {
          init();
        } else {
          createHTML;
        }
      }
  }
  console.log(data)
  ];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
};

  function init() {
    inquirer.prompt(questions).then((data) => {
        createHTML = generateHTML(data);
        writeToFile()
    });
};

init ();