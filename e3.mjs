import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let start = parseFloat(await userInput.question('Met welk getal beginnen we? '));
let end = parseFloat(await userInput.question('Met welk getal eindigen we? '));
let deler1 = parseFloat(await userInput.question('Wat is het eerste getal waarop we testen? '));
let deler2 = parseFloat(await userInput.question('Wat is het tweede getal waarop we testen? '));


let line1 = ""
let line2 = ""
let i = start
while(i <= end){

    if( i % deler1 === 0 && i % deler2 === 0){
        line1 += i
        line1 += ", "
    }else{
        line2 += i + ", "

    }
    
    i++

}


console.log(line1 + ' zijn deelbare door ' + deler1 + " en " + deler2)
console.log(line2 + ' zijn geen deelbare door ' + deler1 + " en " + deler2)


process.exit()