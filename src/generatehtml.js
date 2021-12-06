const section = [];

function generateHtml(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./dist/reset.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </link>
        <link rel="stylesheet" href="./dist/style.css" />
    </head>
    
    <body>
    
        <header class='team-header'>
            Create Your Team
        </header>
    
        <main class='container'>
    
            <div class='row justify-content-center'>
            ${generateCardSection(data)}
            </div>
    
        </main>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>;
    </body>
    
    </html>
`}

function roleProperty(employee) {
        switch (employee.getRole()) {
            case "Manager":
                return `<h2 class='col-12 fifth'>Office #:
                        <h3 class='col-12'>${employee.officeNumber}</h3>
                        </h2>
                        `
            case "Engineer":
                return `<h2 class='col-12 fifth'>GitHub:
                        <h3 class='col-12'><a href='${employee.github}'>${employee.github}</a></h3>
                        </h2>
                        `
            case "Intern":
                return `<h2 class='col-12 fifth'>School:
                        <h3 class='col-12'>${employee.school}</h3>
                        </h2>
                        `
    }
}

const htmlArray = [];

function generateCardSection(data) {
    for (const employee of employees) {
        const htmlString = 
`
<section class='col-3 card'>
<div class='card-header'>
    <h1 class='name'>${employee.name}</h1>
    <h1 class='role'>${employee.getRole()}${getIcon(employee)}</h1>
</div>
<div class='container card-body'>
    <div class='row'>
        <h2 class='col-12 id'>ID:
            <h3 class='col-12'>${employee.id}</h3>
        </h2>
        <h2 class='col-12 email'>Email:
            <h3 class='col-12'><a href='${employee.email}'>${employee.email}</a></h3>
        </h2>
        ${roleProperty(employee)}
    </div>
</div>
</section>
`
htmlArray.push(htmlString)
}
const htmlTeamString = htmlArray.join('')
return htmlTeamString
    }

function getIcon(employee) {
    switch (employee.getRole()) {
        case "Manager":
            return `
                    <i class="fas fa-clipboard"></i>
                    `
        case "Engineer":
            return `
                    <i class="fas fa-cogs"></i>
                    `
        case "Intern":
            return `
                    <i class="fas fa-school"></i>
                    `
}
}


    module.exports = generateHtml;