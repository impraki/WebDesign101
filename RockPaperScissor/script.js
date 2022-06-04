function win(playerSelection,computerSelection){
    console.log("You win! "+ playerSelection+" beats "+ computerSelection);
}
function lose(playerSelection, computerSelection){
    console.log("You Lose! "+ computerSelection+" beats "+playerSelection);
}

function game(playerSelection, computerSelection){
    console.log("com_selection="+computerSelection);
    console.log("player_Selction="+playerSelection);
    if (playerSelection == computerSelection){
        console.log("Match Tie");
    }else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            lose(playerSelection, computerSelection);
        }else{
            win(playerSelection, computerSelection);
        }

    }else if(playerSelection == "paper"){
        if(computerSelection == "scissor"){
            lose(playerSelection, computerSelection);
        }else{
            win(playerSelection, computerSelection);
        }

    }else if(playerSelection == "scissor")ose{
        if(computerSelection == "rock"){
            lose(playerSelection, computerSelection);
        }else{
            win(playerSelection, computerSelection);
        }

    }
}

function computerPlay(){
    let random = ["rock", "paper", "scissor"];
     return random[Math.floor(Math.random() * 3)];
}
 let computerSelection = computerPlay();

 function userPlay(){
     let out = prompt("Rock/Paper/Scissor")
     out = out.toLowerCase()
     return out
 }
 let playerSelection = userPlay();

 game(playerSelection, computerSelection);
 