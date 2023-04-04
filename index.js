//  Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const markdownFile = require('./generateMarkdown');

// Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for usage.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license used to let other developers know what they can and cannot do with your project.',
        choices: ['MIT License', 'Apache License 2.0', 'BSD License', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please include guidelines for how other developers may contribute.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide the tests for your application with examples on how to run them.',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter your GitHub username ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.err(err) : console.log('outputReadme.md Created!')
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const generateMarkdown = markdownFile(response);
            writeToFile("outputReadme.md", generateMarkdown);
        })
        .catch((err) => console.error(err));
}


// Function call to initialize app
init();


