

// let randomFruits=(fruits)=>{
//    const randomFruitslist =  Math.floor(Math.random() * fruits.length);
//     console.log(randomFruitslist);
//     console.log(fruits[randomFruitslist]);
    
// }
// let fruits = ['apple', 'orange', 'bannana', 'grape'];
// // console.log(randomFruits(fruits));
// randomFruits(fruits);




// let randomGameList =(gameList)=>{
//     const values = Math.floor(Math.random()* gameList.length);
//     console.log(values);
//     console.log(gameList[values]);
// }


// const gameList = ['stone', 'paper', 'scissor'];
// // console.log(randomGameList(gameList));
// randomGameList(gameList);


// function buttonclick(){
//     // console.log("button is clicked");

//    let stone = document.getElementById("stone").value;
//    console.log(stone);
// }

let totalScore ={computerScore :0, playerScore :0};

function getComputerChoice(){
    
    // console.log(stone);
    let gameList = ['stone', 'paper', 'scissor'];

        let randomNumber = Math.floor(Math.random()*gameList.length);
       return gameList[randomNumber];

}


function getResult(playerChoice, computerChoice){
let score = 0;

if(playerChoice==computerChoice){
    score = 0
    console.log(score);    
}
else if(playerChoice=='stone'&&computerChoice=='scissor'){
    score = 1
    console.log(score);
    totalScore['playerScore'] +=score;
}else if(playerChoice=='paper'&&computerChoice=='stone'){
    score = 1
    console.log(score);
    totalScore['playerScore'] +=score;
}else if(playerChoice=='scissor'&&computerChoice=='paper'){
    score = 1
    console.log(score);
    totalScore['playerScore'] +=score;
}
else{
    score = -1
    console.log(score);
    totalScore['computerScore'] +=1;
}

// return score;

showResult(score, playerChoice,computerChoice);
 
}

function showResult(score, playerChoice, computerChoice){

    let handsDiv = document.getElementById("hands");
    let playerDiv = document.getElementById("player-score")
    if(score == 0){
        document.getElementById("result").innerText = "Match Tie";
     }
     else if(score == 1){
        document.getElementById("result").innerText = "YOU WON";
    }
    else if(score ==-1){
        document.getElementById("result").innerText = "YOU LOST";
    }
    
    handsDiv.innerText = `${playerChoice} vs ${computerChoice}`;
    playerDiv.innerHTML = `Your Score : ${totalScore['playerScore']} and Computer Score : ${totalScore['computerScore']}`;

}

function onClickRPS(playerChoice){
    console.log({playerChoice});
    let computerChoice = getComputerChoice();
    console.log({computerChoice});
    let scoreValue = getResult(playerChoice,computerChoice);
    console.log({scoreValue}); 
    
}

gamePlay()

function gamePlay(){

    let rpsBtn = document.querySelectorAll(".threebtn")
    // rpsBtn[0].onclick=()=>{ console.log(rpsBtn[0].value)};
    
  rpsBtn.forEach(button => {
    button.onclick = () => onClickRPS(button.value)
    
    let endGameDiv = document.getElementById("endGame");
    endGameDiv.onclick=()=>endGame(totalScore);
  })
    
}


function endGame(totalScore){
   totalScore['playerScore'] = 0;
   totalScore['computerScore'] = 0;
   document.getElementById("hands").innerText='';
   document.getElementById("result").innerText='';
   document.getElementById("player-score").innerText='';
//    document.getElementById("hands").innerText='';
    }
