const inquirer = require('inquirer')
const fs = require('fs')
// I am prompted to add a manager
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

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
    name: 'add',
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
            console.log(manager.getName());
            console.log(manager.getId());
            addMember();
        })     
}

function addMember() {
    inquirer.prompt(employeeQue)
    .then((data) => {
    if (data.add === 'Engineer') {
        addEngineer()
    } else if (data.add === 'Intern') {
        addIntern()
    }})
}

function addEngineer() {
    inquirer.prompt(engineerQue)
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.officeNumber)
        console.log(engineer.getName())
        console.log(engineer.getId())
        addMember()
    })
}

function addIntern(){
    inquirer.prompt(internQue)
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        console.log(intern.getName())
        console.log(intern.getSchool())
    })
}

init();

