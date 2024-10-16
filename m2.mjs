import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let number = parseFloat(await userInput.question('Met welk getal beginnen we? '));
let startTop = await userInput.question('Wil je beginnen met de top (true/false)?  ');
let startLeft = await userInput.question('Wil je beginnen met de left (true/false)?  ');




if(startLeft === 'true' && startTop === 'true' ) {
    for(let i = 1 ; i <= number ; i++){
        let line = ''
        let j = 1
        while(j <= i ){
            line += '*'
            j++
        }

        console.log(line)

    }
}else if(startLeft === 'true' && startTop === 'false'){
    
    while(number >= 1){
        let line = ''
        for(let i = 1 ; i <= number ; i++){
            line += '*'

        }
        console.log(line)
        number --
    }
}else if(startLeft === 'false' && startTop === 'false' ){

    for (let i = number; i >= 1; i--) {
        let line = '';
        
        for (let j = 1; j <= number - i; j++) {
            line += ' ';
        }
        for (let j = 1; j <= i; j++) {
            line += '*'; 
        }
        console.log(line); 
    }

}else if(startLeft === 'false' && startTop === 'true'){

    for (let i = 1; i <= number; i++) {
        let line = '';
       
        for (let j = 1; j <= number - i; j++) {
            line += ' ';
        }
        for (let j = 1; j <= i; j++) {
            line += '*'; 
        }
        console.log(line); 
    }


}

process.exit()
