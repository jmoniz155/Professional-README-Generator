// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "github",
		message: "What is your github username?"  
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address?" 
	},
	{
		type: "input",
		name: "url",
		message: "What is The URL to your project?" 
	},
	{
		type: "input",
		name: "title",
		message: "What is your projects name?" 
	},
	{
		type: "input",
		name: "description",
		message: "Provide a brief description of your project." 	
	},
	{
		type: "list",
		name: "license",
		message: "What license should your project have?", 
		choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"]
	},
	{
		type: "input",
		name: "installation",
		message: "What command should be run to install dependencies?",
		default: "npm i" 
	},
	{
		type: "input",
		name: "tests",
		message: "What command should be run to run test?",
		default: "npm test" 
	},
	{
		type: "input",
		name: "usage",
		message: "What does the user need to know about using the repo?",
	},
	{
		type: "input",
		name: "contributing",
		message: "What does the user need to know about contributing to the repo?",
	},
];
	
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((inquirerResponses) => {
			writeToFile("README.md", generateMarkdown({...inquirerResponses}));
	})
}

// Function call to initialize app
init();

