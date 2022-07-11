function computerPlay()
{
    let options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

console.log(computerPlay());



function caseInsensitive(s){
      return s.toLowerCase();
}

let playerSelection = caseInsensitive(prompt("Choose Rock /Paper/ Scissors"));
console.log(playerSelection);