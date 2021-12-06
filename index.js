const inquirer = require('inquirer')
const fs = require('fs')
const generateHtml = require('./src/generatehtml')
// I am prompted to add a manager
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
employees = []

const managerQue = [{
    type: 'input',
    name: 'name',
    message: 'Please type in your name.',
},
{
    type: 'input',
    name: 'id',
    message: 'Please type your employee ID.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter your office number.',
},
];

const engineerQue = [{
    type: 'input',
    name: 'name',
    message: 'Please type in your name.',
},
{
    type: 'input',
    name: 'id',
    message: 'Please type your employee ID.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your github username.',
},
];

const internQue = [{
    type: 'input',
    name: 'name',
    message: 'Please type in your name.',
},
{
    type: 'input',
    name: 'id',
    message: 'Please type your employee ID.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
},
{
    type: 'input',
    name: 'school',
    message: 'Please enter where you went to school.',
},
];

const employeeQue = {
    type: 'list',
    name: 'role',
    message: 'Would you like to add another team member?',
    choices: [
        'Engineer',
        'Intern',
        "I'm finished building my team"
    ]
}


function init() {
    inquirer.prompt(managerQue)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            employees.push(manager) 
            console.log(employees)
            addMember();
        })
}

function addMember() {
    inquirer.prompt(employeeQue)
        .then((data) => {
            switch (data.role) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "I'm finished building my team":
                    writeToFile(data);
                    break;
            }

        })
}

function addEngineer() {
    inquirer.prompt(engineerQue)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            employees.push(engineer)
            addMember()
        })
}

function addIntern() {
    inquirer.prompt(internQue)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school)
            employees.push(intern) 
            addMember()
        })
}

function writeToFile(data) {
    const makeHtml = generateHtml(data);
    fs.writeFile('index.html', makeHtml, (err =>
        err ? console.log(err) : console.log('Created your HTML file')))
}


init();



