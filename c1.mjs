import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let height = parseFloat(await userInput.question('Geef de hoogte in: '));
let width = parseFloat(await userInput.question('Geef de breedte in: '));




for(let i = 1 ; i <= height ; i++){
    let line = ''

    if(i === 1 || i === height){

        for(let j = 1 ; j <= width ; j++){
            line += '*'
        }

    }else{

        line += '*'
        for(let m = 1 ; m <= width - 2 ; m++){

            line += ' '
        }

        line += '*'

    }

    console.log(line)
}


process.exit()
