function computerPlay()
{
    let options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*options.length)];
}


function caseInsensitive(s){
      return s.toLowerCase();
}

let playerSelection = caseInsensitive(prompt("Choose Rock /Paper/ Scissors"));


let computerSelection = computerPlay();

function playRound(playerSelection,computerSelection){
    if((playerSelection==='rock' && computerSelection==='paper')|| (playerSelection==='paper' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='rock'))
    {
        return "You Lose!"+ computerSelection+" beats "+playerSelection+" !";
    }

    else if((playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='paper' && computerSelection==='rock' )|| (playerSelection==='scissors' && computerSelection==='paper'))
    {
        return "You Win! "+playerSelection+" beats "+computerSelection+" !";
    }
       
    else
    {
       return "It's a Tie !";
    }
}



console.log(playRound(playerSelection,computerPlay()));

