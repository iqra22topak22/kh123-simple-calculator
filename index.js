#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enrt your first num ", type: "number", name: "firstNumber" },
    { message: "enrt your first num ", type: "number", name: "secondNumber" },
    {
        message: "select ane of operators to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISSION"],
    },
]);
// CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISSION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    "please select correct operator";
}
;
