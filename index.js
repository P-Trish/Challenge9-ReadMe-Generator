//  Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [];   
    
    inquirer
    .prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your markdown file?',
    },
    {
    type: 'input',
    name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
    type: 'input',
    name: 'tableOfContents',
    message: 'Enter table of contents to make it easy for users to find what they need. ',
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
    choices: ['MIT License', 'Apache License 2.0', 'BSD License', 'Other'],
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
    name: 'questions',
    message: 'Do you have any questions?',
    }
])
      

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
    fs.writeFile(filename.readMe, (err) =>
    err? console.err (err) : console.log ('README.md Created!')
)

.then ((data)) => {
    console.log(data);
}




//     // save to file (`fs`)

// build out readme as a string

let readMe = 

`## ${data.title}

## ${data.description}

## ${data.tableOfContents} 

## ${data.installation}

## ${data.usage}

## ${data.credits}

## ${data.license}

## ${data.contributing}

## ${data.tests}

## ${data.contributing}

## ${data.questions}`


// TODO: Create a function to initialize app
function init() {}



// Function call to initialize app
init();
