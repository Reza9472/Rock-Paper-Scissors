let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");

const compScore_span = document.getElementById("comp-score");

const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function compChoice(){
    const choices = ['r' , 'p' , 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

console.log(compChoice());

function convert(letter){
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    else return "Scissors";
}


function win(userChoice , computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "You Picked " + convert(userChoice) + "\nComputer Picked " + convert(computerChoice) + "\n" + convert(userChoice) + " beats " + convert(computerChoice) + ". You Win!!!";

}

function lose(){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "You Picked " + convert(userChoice) + "\nComputer Picked " + convert(computerChoice) + "\n" + convert(userChoice) + " beats " + convert(computerChoice) + ". You Lose!!!";
    
}

function draw(){
    
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "You Picked " + convert(userChoice) + "\nComputer Picked " + convert(computerChoice) + ". It's a draw!!!";
    
}


function game(userChoice){
    const computerChoice = compChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;                
    }
    
}

function main(){

    rock_div.addEventListener('click' , function(){
        game("r");
    })
    
    paper_div.addEventListener('click' , function(){
        game("p");
    })
    
    scissors_div.addEventListener('click' , function(){
        game("s");
    })
}

main();