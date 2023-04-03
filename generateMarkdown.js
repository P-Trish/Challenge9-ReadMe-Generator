// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)  {
  const licenseLink = renderLicenseLink (license);
  switch (license){
    case "MIT License":
      return `[![License](https://img.shields.io/badge/license-MIT-blue.svg)](${licenseLink})`;
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${licenseLink})`;
    case "BSD License":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](${licenseLink})`;
  default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
    switch (license){
      case "MIT License":
        return 'https://opensource.org/licenses/MIT';
      case "Apache License 2.0":
        return 'https://opensource.org/licenses/Apache-2.0';
      case "BSD License":
        return 'https://opensource.org/licenses/BSD-3-Clause';
    default: return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return renderLicenseLink(license);
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title} ${renderLicenseBadge(data.license)}
  
## Description
${data.description}

## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Contributing
${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.gitHub}](https://github.com/${data.gitHub}/).
  
`;
}

module.exports = generateMarkdown;










// Acceptance Criteria
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// STILL NEED:

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// LAST STEP: markdown file formatting 