// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseLink = renderLicenseLink(license);
  switch (license) {
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

  switch (license) {
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
  if (license !== "None") {
    return renderLicenseLink(license);
  }
  return '';
}

// TODO: Create a function to generate markdown for README

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
## Description
${data.description}

## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}


## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.gitHub}](https://github.com/${data.gitHub}/).
  
`;
}


module.exports = generateMarkdown;


