import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let userChoice = await userInput.question('Maak een keuze `rock`,`paper`, `scissors` ');

let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

console.log(`Jij koos: ${userChoice}`)
console.log(`De computer koos: ${computerChoice}`)

if(userChoice === computerChoice ){
    console.log(' Gelijkspel!')
}else if ( userChoice === 'rock' && computerChoice === 'scissors' ||
             userChoice === 'scissors' && computerChoice === 'paper' ||
             userChoice === 'paper' && computerChoice === 'rock' ){

                console.log(' Jij wint!')
}else{
    console.log('De computer wint!')
}

process.exit()
            

