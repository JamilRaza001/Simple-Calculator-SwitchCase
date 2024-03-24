#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers: {
  numberOne: number;
  numberTwo: number;
  operator: string;
} = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "Enter a number",
  },
  { type: "number", name: "numberTwo", message: "Enter a number" },

  {
    type: "list",
    name: "operator",
    message: "Enter an operator",
    choices: ["+", "-", "*", "/"],
  },
]);

const { numberOne, numberTwo, operator } = answers;

let result;

switch (operator) {
  case "+":
    result = numberOne + numberTwo;
    break;

  case "-":
    result = numberOne - numberTwo;
    break;

  case "/":
    result = numberOne / numberTwo;
    break;
  
  case "*":
    result = numberOne * numberTwo;
 break;

  default:console.log("Invalid operator");}

  console.log(chalk.blue(`${numberOne} ${operator} ${numberTwo} =`),chalk.green(result));