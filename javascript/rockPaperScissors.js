const computerChoice = document.getElementById('computer');
const playerChoice = document.getElementById('player');
const resultGame = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computer;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { 
    userChoice = e.target.id; 
    playerChoice.innerHTML = userChoice.toUpperCase();
    getComputerChoice();
    getResult();
}));
    
const getComputerChoice =()=>{
    ranNum = Math.floor(Math.random() * possibleChoices.length);
    if(ranNum === 0){
      computer = 'rock';
    }else if(ranNum === 1){
      computer = 'scissors';
    }else{
      computer = 'paper';
    }
    computerChoice.innerHTML = computer.toUpperCase(); 
};

const getResult=() => {
    if(computer === userChoice){
        result = "It's a draw!"
    } 
    if(computer === 'rock' && userChoice === 'paper'){
        result = "Player Wins!"
    } 
    if(computer === 'rock' && userChoice === 'scissors'){
        result = "Computer Wins!"
    } 
    if(computer === 'paper' && userChoice === 'rock'){
        result = "Computer Wins!"
    } 
    if(computer === 'paper' && userChoice === 'scissors'){
        result = "Player Wins!"
    } 
    if(computer === 'scissors' && userChoice === 'paper'){
        result = "Computer Wins!"
    } 
    if(computer === 'scissors' && userChoice === 'rock'){
        result = "Player Wins!"
    } 
    
    resultGame.innerHTML = result;
};