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

        console.log(employee)
        switch (employee.getRole()) {
            case "Manager":
                return `Office #: ${employee.officeNumber}`
            case "Engineer":
                return `GitHub: ${employee.github}`
            case "Intern":
                return `School: ${employee.school}`

    }
}

const htmlArray = [];

function generateCardSection(data) {
    for (const employee of employees) {
        const htmlString = 
`
<section class='col-3 card'>
<section class='card-header'>
<h1 class='name'>${employee.name}</h1>
<h1 class='role'>${employee.getRole()}</h1>
</section>
<h2 class='id'>ID: ${employee.id}</h2>
<h2 class='email'>Email: ${employee.email}</h2>
<h2 class='fifth'>${roleProperty(employee)}</h2>
</section>
`
htmlArray.push(htmlString)
}
const htmlTeamString = htmlArray.join('')
return htmlTeamString
    }


    module.exports = generateHtml;