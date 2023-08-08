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
        name: "linkAdd",
        message: "Do you want to add a link to your project?",
    },
    {
        type: "input",
        name: "link",
        message: "Enter your link.",
    },
    {
        type: "input",
        name: "How?",
        message: "How is the app used?  Give instructions.",
    },
    {
        type: "input",
        name: "License",
        message: "What license is being used? (ie...MIT)",
    },
    {
        type: "input",
        name: "Tests",
        message: "What commands are needed to test this app?",
    },
    {
        type: "input",
        name: "Username",
        message: "What is your Github username?",  
    },
    {
        type: "input",
        name: "Contact INFO",
        message: "What is your contact info for futur inquiries?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Whats the filename:", fileName, data)
 fs.writeFileSync("readme.md",generateMarkdown(data))
 console.log()

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



