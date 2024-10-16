import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let number = parseFloat(await userInput.question('Tot welk getal zullen we afdrukken? '));


for( let i = 1 ; i <= number ; i++){
    let line = ""
    let j = 1

    while( j <= i){
        line += i
        j++
    }
    console.log(line)
}

process.exit()