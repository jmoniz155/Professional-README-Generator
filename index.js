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
		choices: ["MIT", "APACHE 2.0", "GPL. 3.0", "BSD 3", "None"]
	},
	{
		type: "input",
		name: "Installation",
		message: "What command should be run to install dependencies?",
		defatult: "npm i" 
	},
	{
		type: "input",
		name: "test",
		message: "What command should be run to run test?",
		defatult: "npm test" 
	},
	{
		type: "input",
		name: "usagen",
		message: "What does the user need to know about using the repo?",
	},
	{
		type: "input",
		name: "contributing",
		message: "What does the user need to know about contributing to the rope?",
	},
];
