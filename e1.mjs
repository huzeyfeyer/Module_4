import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let side1 = parseFloat(await userInput.question('Geef zijde 1 in:'));
let side2 = parseFloat(await userInput.question('Geef zijde 2 in:'));

let surface = side1 * side2

console.log(`De oppervlakte is:  ${surface}`)
process.exit()