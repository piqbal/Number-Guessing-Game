#! /usr/bin/env node

import inquirer from 'inquirer';

let SystemGenerated:number=Math.floor(Math.random()*10)

let loop=true;
while(loop){
let answers:{UserGuess:number}= await inquirer.prompt({
    type: "number",
    name: "UserGuess",
    message: "Please select between 1 to 10.",
})
let {UserGuess}=answers
console.log("SystemGenerated number", SystemGenerated  , "UserGuess number", UserGuess)
if(UserGuess == SystemGenerated){
    console.log("Your number has matched \n You win!")
}else {
    console.log("Your number couldn't match \n Please try again.")
}

let more= await inquirer.prompt({
    type:"confirm",
    name: "PlayAgain",
    message: "Do you want to play again?",
    default: false,
})
if (more.PlayAgain == false){
    loop=false;
}
}

