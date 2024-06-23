#!/usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome in the TypeScript Quiz.\n");

let points = 0;

let question1 = await inquirer.prompt(
    [
        {
            name: "one",
            type: "list",
            message: "Question 1: Which programming language is a superset of Javascrit?",
            choices: ["HTML","Typescript","Python","None of the above"]
        }
    ]
);

if (question1.one === "Typescript"){

    console.log("1: Correct Answer.");

    ++ points;

} else {

    console.log("1: Incorrect Answer.");
};

let question2 = await inquirer.prompt(
    [
        {
            name: "two",
            type: "list",
            message: "Question 2: Who is the creator of Typescript?",
            choices: ["Anders Hejlsberg","Guido van Rossum","Tim Berners-Lee","None of the above"]
        }
    ]
);

if (question2.two === "Anders Hejlsberg"){

    console.log("2: Correct Answer.");

    ++ points;

} else {

    console.log("2: Incorrect Answer.");
};

let question3 = await inquirer.prompt(
    [
        {
            name: "three",
            type: "list",
            message: "Question 3: Which of the following is NOT a typescript data type?",
            choices: ["string","number","boolean","array"]
        }
    ]
);

if (question3.three === "array"){

    console.log("3: Correct Answer.");

    ++ points;

} else {

    console.log("3: Incorrect Answer.");
};

let question4 = await inquirer.prompt(
    [
        {
            name: "four",
            type: "list",
            message: "Question 4: Which keyword is used to declare a constant variable in Typescript?",
            choices: ["let","var","const","None of the above"]
        }
    ]
);

if (question4.four === "const"){

    console.log("4: Correct Answer.");

    ++ points;

} else {

    console.log("4: Incorrect Answer.");
};

let question5 = await inquirer.prompt(
    [
        {
            name: "five",
            type: "list",
            message: "Question 5: How do you declare a variable with a specific type in Typescript?",
            choices: ["var name : type","let name : type","name : type","type name : type"]
        }
    ]
);

if (question5.five === "let name : type"){

    console.log("5: Correct Answer.");

    ++ points;

} else {

    console.log("5: Incorrect Answer.");
};

console.log(`Your score out of 5 is `+ points);

if (points === 5){

    console.log("Congratulations! Your answered all the questions correctly.");

}

else if (points === 3){

    console.log("You tried well.");

}

else if (points === 1){

    console.log("You need some practice.");

}

else {
    console.log("Please try again!");
};