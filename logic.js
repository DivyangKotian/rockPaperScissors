const choices=["rock","paper","scissor"];
function getRandomChoice (choices){                      //func for random choice by comp
    return choices[Math.floor(choices.length*Math.random())];
}

let computerSelection= getRandomChoice(choices);  // store random choice
console.log(computerSelection);

function userChoice (choices){      // converting player choice to lower, so we avoid confusion
    let playerChoice= prompt("Enter your weapon of mass destruction",);
    let upper= playerChoice.toLowerCase();
    return upper;
}
let playerSelection= userChoice(choices);  // store for later use
console.log(playerSelection);

function playOneRound(computerSelection, playerSelection){          // intial code is only for one round of the game
    if (playerSelection!="paper"&&playerSelection!="rock"&&playerSelection!="scissor"){         // to avoid random choices
        return("make a valid choice");
    }

    else if(computerSelection==playerSelection){  //tie 
        return("the round ends in a tie, try again");
    }
    else if (playerSelection=="rock"){               // for now im not adding the same choices 
        if(computerSelection=="paper")
            return ("you lose, paper beats rock");
        else if(computerSelection="scissor")
            return ("you win, rock beats scissor");
    }
    else if( playerSelection=="paper"){
            if(computerSelection=="scissor")
                return (" you lose, scissor beats paper");
             else if(computerSelection=="rock")
                 return ("you win, paper beats rock");
    }
    else if (playerSelection=="scissor"){
        if(computerSelection=="rock")
            return(" you lose, rock beats scissor");
        if(computerSelection=="paper")
            return("you win, scissor beats rock");
    }
}

let result= playOneRound(computerSelection,playerSelection);

alert(result)
