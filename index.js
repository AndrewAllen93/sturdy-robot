// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your repository?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'How would you describe the repository?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How would you use the application?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How would you install it?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contGuide',
      },
      {
        type: 'list',
        message: 'How would you test it?',
        name: 'tests',
        choices: ['Manual testing', 'Automated testing', 'No testing'],
      },
      {
        type: 'list',
        message: 'Select a license for your application:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None'],
      },
      {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing README:', err);
      } else {
        console.log(`README (${fileName}) generated successfully.`);
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("example.md", markdown);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

// Function call to initialize app
init();
