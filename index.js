#! /usr/bin/env node
import inquirer from "inquirer";
let quitions = await inquirer.prompt([
    {
        name: "question1",
        type: "input",
        message: "Enter the first number: "
    },
    {
        name: "question2",
        type: "input",
        message: "Enter the second number: "
    }
]);
let operator = await inquirer.prompt([
    {
        name: "operator",
        type: "list",
        message: "Select the operator: ",
        choices: ["+", "-", "*", "/"]
    }
]);
if (operator.operator === "+") {
    console.log(quitions.question1 + parseInt(quitions.question2));
}
else if (operator.operator === "-") {
    console.log(quitions.question1 - parseInt(quitions.question2));
}
else if (operator.operator === "*") {
    console.log(quitions.question1 * parseInt(quitions.question2));
}
else if (operator.operator === "/") {
    console.log(quitions.question1 / parseInt(quitions.question2));
}
