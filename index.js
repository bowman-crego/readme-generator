// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import Choice from "inquirer/lib/objects/choice.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is your Project Title?",
        name: "title",
        type:"input"

    },
    {
        message: "What is your Description?",
        name: "description",
        type:"input"

    }, 
    {
        message: "What is your Installation Instructions?",
        name: "instructions",
        type:"input"
    }, 
    {
        message:"Describe the Usage Information",
        name: "usage",
        type: "input"
    },
    {
        message: "Please choose a license?",
        name: "license",
        type:"list",
        choices: ["MIT", "BSD3", "none"]
    },
    {
        message: "What is your GitHub username?",
        name: "username",
        type:"input",
       
    },
    {
        message: "What is you email address?",
        name: "email",
        type:"input",
    },
    {
        message: "Who can contribute to this project?",
        name: "contributing",
        type:"input",
    },
    {
        message: "What tests are needed?",
        name: "tests",
        type:"input",
    }
    
];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Cannot successfully create readMe', err)
        } else {
            console.log(`Successfully wrote to ${'README.md'}`)
        }

    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {

    let markdown = generateMarkdown(answers);
    
    writeToFile("README.md", markdown)
    })
}

// Function call to initialize app
init();
