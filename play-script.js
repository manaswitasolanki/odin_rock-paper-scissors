function computerPlay()
{
    let options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*options.length)];
}


function caseInsensitive(s){
      return s.toLowerCase();
}

function playerPlay()
{
    return caseInsensitive(prompt("Choose Rock /Paper/ Scissors"));
}



function playRound(playerSelection,computerSelection){
    if((playerSelection==='rock' && computerSelection==='paper')|| (playerSelection==='paper' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='rock'))
    {
        return 'l';
    }

    else if((playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='paper' && computerSelection==='rock' )|| (playerSelection==='scissors' && computerSelection==='paper'))
    {
        return 'w';
    }
       
    else
    {
       return 't';
    }
}






function game()
{
    let score=[];
    for(i=0;i<5;i++)
    {
        let p= playerPlay();
        let c= computerPlay();
        let a = playRound(p,c);
        score.push(a);
        if(a==='l')
        {
            console.log("Round: " +i+" : "+"You Lose!"+ c+" beats "+p+" !");
        }
        else if(a==='w')
        {
            console.log("Round: "+i+ " : "+"You Win! "+p+" beats "+c+" !");
        }
        else
        {
            console.log("Round: "+i+" : "+"It's a Tie !");
        }
                
    }

    let wins=0,loses=0;

    for(i=0;i<score.length;i++)
    {
        if(score[i]==='w')
        {
            wins+=1;
        }
        else if(score[i]=='l')
        {
            loses+=1;
        }
    }

    if(wins>=3)
    {
        return "YOU WIN!!!";
    }
    else if(loses>=3)
    {
        return "YOU LOSE!!!";
    }
    else
    {
        return "IT'S A TIE!!!"
    }
}

console.log(game());







