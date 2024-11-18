let userScore = 0;
let compScore = 0;
let draws = 0;

let res = document.querySelector(".result");

let userHighScore = document.querySelector("#user-score");
let compHighScore = document.querySelector("#computer-score");
let drawSore = document.querySelector("#draw-score");

const choices = document.querySelectorAll(".choice");

const getCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    let randChoice = Math.floor(Math.random() * 3);
    return options[randChoice];
}

const playGame = (userChoice) => {
    let compChoice = getCompChoice();
    startGame(userChoice, compChoice);
}

function userWin(userChoice, compChoice) {
    userScore++;
    userHighScore.innerText = userScore;
    res.style.color = "green";
    res.innerHTML = `<b>Result: Win <br> User: ${userChoice} <br> Computer: ${compChoice} </b>`;
}

function userLoose(userChoice, compChoice) {
    compScore++;
    compHighScore.innerText = compScore;
    res.style.color = "red";
    res.innerHTML = `<b> Result: loose <br> User: ${userChoice} <br> Computer: ${compChoice} </b>`;
}

function gameDraw() {
    draws++;
    drawSore.innerText = draws;
    res.style.color = "blue";
    res.innerHTML = "<b>Result: Draw <br> Both choose same</b>";
}

function startGame(userChoice, compChoice) {
    if (userChoice === compChoice) {
       gameDraw();
    } else if (userChoice === "stone" && compChoice === "scissors") {
        userWin(userChoice, compChoice);
    } else if (userChoice === "paper" && compChoice === "stone") {
        userWin(userChoice, compChoice);
    } else if (userChoice === "scissors" && compChoice === "paper") {
        userWin(userChoice, compChoice);
    } else {
        userLoose(userChoice, compChoice);
    }
}

for(let i=0; i<choices.length; i++) {
    choices[i].addEventListener("click", ()=> {
        const userChoice = choices[i].getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
}