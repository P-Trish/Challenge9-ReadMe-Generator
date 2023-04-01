// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;













// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer
//     .prompt([
//     {
//     type: 'input',
//     name: 'title',
//     message: 'What is the title of your markdown file?',
//     },
//     {
//     type: 'input',
//     name: 'description',
//       message: 'Provide a short description explaining the what, why, and how of your project.',
//     },
//     {
//     type: 'input',
//     name: 'table of contents',
//     message: 'Enter table of contents to make it easy for users to find what they need. ',
//     },
//     {
//     type: 'input',
//     name: 'installation',
//     message: 'What are the steps required to install your project?',
//     },
//     {
//     type: 'input',
//     name: 'usage',
//     message: 'Provide instructions for usage.',
//     },
//     {
//     type: 'list',
//     name: 'license',
//     message: 'Choose the license used to let other developers know what they can and cannot do with your project.',
//     choices: ['MIT License', 'Apache License 2.0', 'BSD License'],
//     },
//     {
//     type: 'input',
//     name: 'contributing',
//     message: 'Please include guidelines for how other developers may contribute.',
//     },
//     {
//     type: 'input',
//     name: 'tests',
//     message: 'Please provide the tests for your application with examples on how to run them.',
//     },
//     {
//     type: 'input',
//     name: 'questions',
//     message: 'Do you have any questions?',
//     }
// ])
      

// .then ((response)) => {
//     // consider console logging response to see what the data inside is
//     // build out readme as a string
//     // save to file (`fs`)
//     // I think that's it?
//     let readMe = 
//     // ENTER READ ME TEXT HERE --------------------->

// const filename = `README.md`





// const filename = `readMe.md`;

// fs.writeFile(filename.readMe, (err) =>
// err? console.err (err) : console.log ('README.md Created!')
// )

//   });
// }






//   title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
