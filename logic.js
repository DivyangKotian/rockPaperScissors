const choices=["rock","paper","scissor"];

let computerSelection;
let playerSelection;          
let result;    
let currentRound=0;
let totalRound=5;                          

function getRandomChoice (choices){                      //func for random choice by comp
    return choices[Math.floor(choices.length*Math.random())];
}


//  creating elements needed globally

const btnRock = document.querySelector(`#rock`);            
const btnPaper = document.querySelector(`#paper`);
const btnScissor = document.querySelector(`#scissor`);
const playerElement= document.querySelector(`#player-selection`);
const computerElement= document.querySelector(`#comp-selection`);

const finalWin= document.querySelector(`#final-winner`);
// adding eventListeners to the images, for player input
// call the playGame() when an img is clicked

btnRock.addEventListener(`click`, (e)=>{
    if (currentRound < totalRound) {            // to stop players from making a choice after 5 rounds
    playerSelection= "rock";
    playOneRound();     
}});

btnPaper.addEventListener(`click`, (e)=>{
    if (currentRound < totalRound) {
    playerSelection= "paper";
  playOneRound();
}});

btnScissor.addEventListener(`click`, (e)=>{
    if (currentRound < totalRound) {
    playerSelection= "scissor";
    playOneRound();
}});


function playOneRound(){              // intial code is only for one round of the game
  
    finalWin.textContent="";           // resetting the final winner from previous game
   
    currentRound++;

    computerSelection = getRandomChoice(choices);

    playerElement.textContent=`Player chose : ${playerSelection}`;
    computerElement.textContent=`Computer chose : ${computerSelection}`;

    if(computerSelection==playerSelection){                        //tie condition
        result="the round ends in a tie, try again";
    }
    else if (playerSelection=="rock"){                                 // adding all possible events
        if(computerSelection=="paper")
        result="you lose, paper beats rock";
    else if(computerSelection="scissor")
    result="you win, rock beats scissor";
}
else if( playerSelection=="paper"){
    if(computerSelection=="scissor")
    result=" you lose, scissor beats paper";
else if(computerSelection=="rock")
result="you win, paper beats rock";
}
else if (playerSelection=="scissor"){
    if(computerSelection=="rock")
    result=" you lose, rock beats scissor";
if(computerSelection=="paper")
result="you win, scissor beats rock";
}
console.log(result);

updateScore();                      //updating score every round    

if(currentRound>=totalRound)
    endGame();  
return;                    //function to end game and reset all scores
}

let playerScore=0;                     //initial score
let compScore=0;

function updateScore(){                                                
    if(result.includes("win"))
    playerScore++;
    if( result.includes("lose"))
    compScore++;
if( result.includes("tie")|| result.includes("Please"))               // replaying round in case of tie
currentRound--;
updateScoreBoard();                                                        
}


function updateScoreBoard(){                                                // funtion to update the scoreboard
    
    const playerScoreBoard = document.querySelector(`#player-score`);       // elements relating to the <p> tags in scoreboard
    const compScoreBoard = document.querySelector(`#comp-score`);
    
    playerScoreBoard.textContent=`Player Score: ${playerScore}`;            //updating the UI scoreboards text content
    compScoreBoard.textContent=`Computer Score: ${compScore}`;
}

function endGame(){
    
    updateScoreBoard();
    
    setTimeout(() => {                  // set a delay so that the scoreboard can update before alert message shows up
        
        
        const message=`Game Over!!! Final scores are Player-${playerScore} and Computer -${compScore}`;

    window.alert(message);
    let winner;
    if (playerScore>compScore)
        winner="Player Wins, play again?";
    else
        winner="Computer Wins, better luck next time";      
    finalWin.textContent=winner;                                            //address final winner in next <p>                                                     
}, 100);   
// Adjust the delay time : 100ms as stater
}
const newGameBtn=document.querySelector(`#new-game`);

    newGameBtn.addEventListener(`click`, (e) =>{
        newGame();
    })
    
    function newGame(){                                          // resetting all parameters  
        playerElement.textContent=``;   
        computerElement.textContent=``; 
        finalWin.textContent=``;                                                
        currentRound=0;
        playerScore=0;
        compScore=0;
        updateScoreBoard();
    }
    
    
    