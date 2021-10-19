const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js")
const teamMembers = []
const generateHTML = require("./generateHTML.js");


function init() {
  inquirer.prompt(questions).then((data) => {
 //   console.log(data);
    if(data.employeeType==='Manager') {
      const addManager = new Manager(data.name, data.id, data.email, data.office)
      teamMembers.push(addManager);
    }
 //     console.log(teamMembers);
    if(data.employeeType==='Engineer') {
      const addEngineer = new Engineer(data.name, data.id, data.email, data.github)
      teamMembers.push(addEngineer);
    }
 //    console.log(teamMembers);
    if(data.employeeType==='Intern') {
      const addIntern = new Intern(data.name, data.id, data.email, data.college)
      teamMembers.push(addIntern);
    };

//    console.log(teamMembers);

if(data.continue==="yes") {
  init();
} else {
  writeToFile("./dist/index.html", generateHTML(teamMembers));
}
  });
};

// Creates an array of questions about employees
const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of the team member?",
      validate: answer => {
      if (answer !== "") {
      return true;
}
return "Please enter a name with at least one valid letter.";
}
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's employee id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team member's email address?",
      validate: answer => {
        const valid = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
        if (valid) {
            return true;
        }
        return "Please enter a valid email address";
    }
    },
    {
      type: "list",
      name: "employeeType",
      message: "Is the employee a manager, an engineer or an intern.",
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
    
      type: "input",
      name: "office",
      message: "What is the manager's office number?",
      when: (data) => data.employeeType === "Manager",
    },
    {

      type: "input",
      name: "github",
      message: "What is the engineer's github username?",
      when: (data) => data.employeeType === "Engineer",
  },
  {

      type: "input",
      name: "college",
      message: "What college/university does the intern attend?",
      when: (data) => data.employeeType === "Intern",
  },
{
  type: "list",
  name: "continue",
  choices: ['yes', 'no'],
  message: "Do you wish to add another employee?",
  }
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      err ? console.error(err) : console.log('HTML file generated!');
  })
}

init ();