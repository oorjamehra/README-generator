// Inquirer package installed
const inquirer = require('inquirer');
const fs = require('fs');

// Questions to prompt user for info to be entered on README file
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: "Title",
        default: "README-generator",
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A project title is required");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please write a short description of your project.",
        name: "Description",
        default: "Project Description",
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A project description is required");
            }
            return true;
    },
    {
        type: 'input',
        message: "Installation instructions.",
        name: "Installation",
        default: "Installation Instructions",
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please enter installation instructions");
            }
            return true;
    },
    {
        type: 'input',
        message: "Please a section for usage of project .",
        name: "Usage",
        default: "Usage",
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please include usage info");
            }
            return true;
    },
    {
        type: 'input',
        message: "Please include contributing guidelines",
        name: "Contributing",
        default: "Contribution guidelines",
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A project description is required");
            }
            return true;
    },
    {
        type: 'input',
        message: "Please include instructions for how to run tests",
        name: "Test",
        default: "Test instructions",
        validate: function(answer) {
            if (answer.length <n 1) {
                return console.log("Test instructions required");
            }
            return true;
    }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
