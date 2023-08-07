// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "discription",
        message: "What is the purpose of your project?",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide the path to the image you want as the screenshot.",
    },
    {
        type: "input",
        name: "link",
        message: "Provide the URL where you can access your deployed APP.",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("WHATS THE FILENAME:", fileName)
 fs.writeFileSync("Answers",generateMarkdown(data))

}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then((answer)=>{
    console.log(answer)
    writeToFile("README.md", answer)
   })

}

// Function call to initialize app
init();



