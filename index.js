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
    validate: (data) => {
        if (data === '') {
            return `Please enter your name`
        };
        return true;
    }
},
{
    type: 'input',
    name: 'id',
    message: 'Please type your employee ID.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your id`
        };
        return true;
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your address`
        } else if (data.includes(`@`) !== true) {
            return `Please enter a valid email address`
        }
        return true;
    }
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter your office number.',
    validate: (data) => {
        if (isNaN(data)) {
            return `You did not enter a valid number`;
        } else if (data === '') {
            return `Please enter your office number`
        }
        return true;
    }
},
];

const engineerQue = [{
    type: 'input',
    name: 'name',
    message: 'Please type in your name.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your name`
        };
        return true;
    }
},
{
    type: 'input',
    name: 'id',
    message: 'Please type your employee ID.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your id`
        };
        return true;
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your address`
        } else if (data.includes(`@`) !== true) {
            return `Please enter a valid email address`
        }
        return true;
    }
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your github username.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your GitHub username`
        }
        return true;
    }
},
];

const internQue = [{
    type: 'input',
    name: 'name',
    message: 'Please type in your name.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your name`
        };
        return true;
    }
},
{
    type: 'input',
    name: 'id',
    message: 'Please type your employee ID.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your id`
        };
        return true;
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your address`
        } else if (data.includes(`@`) !== true) {
            return `Please enter a valid email address`
        }
        return true;
    }
},
{
    type: 'input',
    name: 'school',
    message: 'Please enter where you went to school.',
    validate: (data) => {
        if (data === '') {
            return `Please enter your school`
        };
        return true;
    },

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

async function addEngineer() {
    let data = await inquirer.prompt(engineerQue)
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
        employees.push(engineer)
    addMember()
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



