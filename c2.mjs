import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let height = parseFloat(await userInput.question('Geef de hoogte in: '));
let width = parseFloat(await userInput.question('Geef de breedte in: '));
let outline = await userInput.question('Outline `true` of `false` ');

let space = ( width + 1 )/ 2


if(outline === 'true'){

    for(let i = 1 ; i <= height  - 1 ; i++){
    
    let stars = ''
    let spaceString = ''
    

    for(let m = space - 1 ; m >= i ; m--){
        spaceString += ' '
        
    }

    if( i === 1){
        stars += '*'
    }else{
        stars += '*'
        for(let k = 2 ; k < 2 * i - 1 ; k++){
            stars += ' '
        }
        stars += '*'
    }

    console.log(spaceString + stars)

    }

    let line = ''
    for (let j = 1 ; j <= width ; j++){
        
        line += '*'

    }
    console.log(line)

}else{
    
    
    for(let i = 1 ; i <= height ; i++){
        let stars = ''
        let spaceString = ''
    
        for( let k = space ; k >= i ; k--){
            spaceString += ' '
            
        }

        stars += '*'

        for( let j = 1 ; j < i ; j++){

            stars += '**'
        }
    
        
    
        console.log(spaceString + stars)

    }
}

process.exit()
