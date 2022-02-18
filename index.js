/*jshint esversion: 6 */

const inquirer = require('inquirer');
const fs = require ('fs');

//  module.exports = manager;


const generateHtml = ({name, email, github, ID, officeNumber}) =>
 `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>New Page</title>
</head>
<body>

<style>
body{
    font-family:Georgia, 'Times New Roman', Times, serif;
}

.employee-card{
    background-color: aliceblue;
    font-size: 20px;
    padding: 25px;
}
</style>

<div class="employee-card">
    <h1>${name}</h1>
    <p>Email: ${email}</p>
    <p>Github: ${github}</p>
    <p>ID Number: ${ID}</p>
    <p>Office Number: ${officeNumber}</p>
</div>


</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            choice: 'enter name'
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter github'
        },
        {
            type: 'input',
            name: 'ID',
            message: 'enter ID'
        },
        {
            type: 'input',
            name: 'Office Number',
            message: 'enter Office Number'
        }

    ])
    .then((input) => {
        const userHtmlPage = generateHtml(input);

        fs.writeFile('index.html', userHtmlPage, (err) =>
        err ? console.log(err) : console.log('Page generated')
        );
    });


    
