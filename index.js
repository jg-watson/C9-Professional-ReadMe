//const used to acquire path to node_modules to use inquirer
const inquirer = require('./node_modules/inquirer');
const fs = require = require('fs');

//inquirer used to generate the readme
inquirer.prompt([
    {
        type:'input',
        message:'What is the name of your project?',
        name:'title',
    },
    {
        type:'input',
        message:'Is there a Description?',
        name:'Description',
    },
    {
        type:'input',
        message:'Is there a table of contents?',
        name:'Usage',
    },
    {
        type:'input',
        message:'Were any licenses used?',
        name:'License',
    },
    {
        type:'input',
        message:'Were there contributors to the project?',
        name:'Contributing',
    },
    {
        type:'input',
        message:'Were tests run?',
        name:'Tests',
    },
    {
        type:'input',
        message:'Would you like to leave Contact info?',
        name:'Contact Info',
    }
])
.then((response) =>
response.confirm === response.password
?console.log('Success!')
: console.log('Answer not valid')
);