const choices=["rock","paper","scissor"];
function getRandomChoice (choices){                      //func for random choice by comp
    return choices[Math.floor(choices.length*Math.random())];
}

/*let computerSelection= getRandomChoice(choices);              // store computer random choice
console.log(`computer chose ${computerSelection}`);              commented out and used later in playGame() func*/

function userChoice (choices){                                    // converting player choice to lower, so we avoid any errors concerning case sensitivity
    let playerChoice= prompt("Enter your weapon of mass destruction",);
    let lower= playerChoice.toLowerCase();
    return lower;
}
/*let playerSelection=userChoice(choices);                           // store user choice for later use
console.log(`player chose ${playerSelection}`);                      playerSelection and computerSelection declared in the playGame() func as they arent needed until playOneRound is called */

function playOneRound(computerSelection, playerSelection){              // intial code is only for one round of the game
    if (playerSelection!="paper"&&playerSelection!="rock"&&playerSelection!="scissor"){               // to avoid random choices apart from RPK
        return("Please choose either rock, paper or scissor to continue");             
    }

    else if(computerSelection==playerSelection){                        //tie condition
        return("the round ends in a tie, try again");
    }
    else if (playerSelection=="rock"){                                 // adding all possible events
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

//let result= playOneRound(computerSelection,playerSelection);      // code until now has been only for one round, commented out as it will be called in playGame() from now on

function playGame(){                    //5 rounds function
    let round;
    let playerScore=0;
    let compScore=0;

    for (round=1; round<6; round++ )
        { 
            console.log(`round ${round}`)
            let computerSelection=getRandomChoice(choices);                  // storing the random generated choice by computer
            console.log(`computer chose ${computerSelection}`);
            let playerSelection=userChoice(choices);                           // storing the player choice
            console.log(`player chose ${playerSelection}`);                         
            playOneRound(computerSelection, playerSelection);
            let result= playOneRound(computerSelection,playerSelection);
        console.log(result);                                                    // round display counter
        if(result.includes("win"))
                 playerScore++;
        if( result.includes("lose"))
                 compScore++;
        if( result.includes("tie")|| result.includes("Please")){                // replaying round in case of tie
                 round--;
        }
               
             console.log(`current score is player-${playerScore} and computer- ${compScore}`)       // basic score board
        }
    if (playerScore>compScore)                                                      // final winner 
        console.log('player wins');
    else
        comsole.log('computer wins');
        }
    playGame();
    


