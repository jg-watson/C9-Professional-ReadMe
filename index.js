//const used to acquire path to node_modules to use inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//inquirer used to generate the readme
const questions = [
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title',
    },
    {
        type:'input',
        message:'Description?',
        name:'description',
    },
    {
        type:'input',
        message:'Contents',
        name:'Table of Contents',
    },
    {
        type:'input',
        message:'Installation',
        name:'installation',
    },
    {
        type:'input',
        message:'Usage',
        name:'usage',
    },
    {
        type:'list',
        message:'Licenses Used',
        name:'license',
        choices:['None']
    },
    {
        type:'input',
        message:'Contributing',
        name:'contributing',
    },
    {
        type:'input',
        message:'Tests',
        name:'tests',
    },
    {
        type:'input',
        message:'GitHub Username:',
        name:'github',
    },
    {
        type:'input',
        message:'Email Information:',
        name:'email',
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
