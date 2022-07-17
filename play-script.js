function computerPlay()
{
    let options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*options.length)];
}


function choose(){

    let computerScore=0;
    let playerScore=0;
    
document.querySelector("#rock").addEventListener('click',()=> {

    if(computerScore<5 && playerScore<5)
    {
        playRound('rock',computerPlay());
        displayScore();
    }
    else{
        displayResult();
    }
});

document.querySelector('#paper').addEventListener('click',()=>{

    if(computerScore<5 && playerScore<5)
    {
        playRound('paper',computerPlay());
        displayScore();
    }
    else
    {
        displayResult();
    }
});

document.querySelector('#scissors').addEventListener('click',()=>{

    if(computerScore<5 && playerScore<5)
    {
         playRound('scissors',computerPlay());
         displayScore();
    }
    else
    {
        displayResult();
    }
})





function playRound(playerSelection,computerSelection){
    if((playerSelection==='rock' && computerSelection==='paper')|| (playerSelection==='paper' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='rock'))
    {
        
        //return 'l';
        computerScore++;
    }

    else if((playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='paper' && computerSelection==='rock' )|| (playerSelection==='scissors' && computerSelection==='paper'))
    {
        //return 'w';
        playerScore++;
         
    } 
    
}

function displayScore()
{
    document.querySelector("#score-p").innerText=playerScore;
    document.querySelector("#score-c").innerText=computerScore;
}

function displayResult()
{
    if(playerScore>computerScore)
    {
        document.querySelector("#results").innerText="YOU WIN !!!";
    }
    else if(playerScore<computerScore)
    {
        document.querySelector('#results').innerText="YOU LOSE:(((";
    }
    else{
        document.querySelector('#results').innerText="TIE";
    }
}

}

choose();


