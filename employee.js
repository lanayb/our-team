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
    <h1>${name}</h1>
    <p>${email}</p>
    <p>${github}</p>
    <p>${ID}</p>
    <p>${officeNumber}</p>

</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter name'
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

 
    
