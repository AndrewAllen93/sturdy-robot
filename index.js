// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "languages",
    message: "What languages do you know?",
  },
  {
    type: "list",
    name: "communicationMethod",
    message: "What is your preferred method of communication?",
    choices: ["Email", "Phone", "In-Person"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
