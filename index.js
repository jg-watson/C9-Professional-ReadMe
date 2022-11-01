//Required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What is your project's name?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Were any licenses used for this project?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What knowledge does a user need to run this code?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How you can contribute to this project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?',
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
