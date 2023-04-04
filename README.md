 # Professional ReadMe Generator
  
## Description

This project is a README Generator through the command-line application. It utilizes the NPM Inquirer package and required dependencies.  The motivation for this project was to apply the inquirer node module to create markdown file through the command-line application, in this case a README.md file.  For this project I took on the user story:
"AS A developer
I WANT a README generator 
SO THAT I can quickly create a professional README for a new project."
As stated in this challenge's direction, "This allows the project creator to devote more time working on the project," such that the README can save time by being created in the command line.  

This project was built as a tool to diminish the time it takes for a developer to create a README file, so that they can spend more time working on the actual project.  This solves the problem for developers who need to create a README more efficiently in their workflow.  

By creating this project, I learned how to explore and utilize the Node Package Manager (NPM) Inquirer package, the module.exports method in exporting a file and the require method for including packages needed for an application.  Additionally I learned how to write files from JavaScript using the 'fs' package.  

## Installation

In order to install project dependencies, I ran 'npm i -y' in the project root directory to install the node modules folder & package JSON that includes everything the application is dependent on to run.  

To use the Inquirer packagem I ran 'npm i inquirer@8.2.4'.  
​
## Usage
​
To create a README.md file with this generator, the command 'node index.js' was used in the command line of the project root directory.  Inquirer then guided the users to answer prompted questions pertaining to the README such as project title, a short description of the project, installation steps, usage instructions, license, contributing guidelines, tests for the application, the user's GitHub username, and email address.  

![alt text](/assets/images/Terminal.png)

If the user chooses a liscense for their project from a list of options, the license badge would appear at the top of the README file next to the title. When the user enters their GitHub username and their email address, both would be added to the Questions section of the README with instructions on how to reach them with any questions.  

![alt text](/assets/images/OutputReadMe.png)

A table of contents section also functions to make it easy for users to find what they need as they can click the links and are taken directly to that section of the README file.  


Please refer to this link to preview a demo of the application: 
https://drive.google.com/file/d/12m86asuZxzuFCZO2P68kgSR8_9n_Rb7R/view

   
​
## Credits
​
I'd like to thank the tutors that helped me get started and supported the writing of my code throughout creation of this project.  
​
## License
​
N/A

## Questions

If you have any questions, please contact me directly at pkfalberto@gmail.com.  


​
