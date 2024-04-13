let userrScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-box");
const userScore = document.querySelector("#user-score");
const comppScore = document.querySelector("#comp-score");
const generatecompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win! ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        userrScore++;
        userScore.innerText = userrScore;
    }
    else {
        msg.innerText = `You loss, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comppScore.innerText= compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = generatecompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            if (compChoice === "paper") {
                userWin = false;
            }
            if (compChoice === "scissor") {
                userWin = true;
            }
        }
        else if (userChoice === "paper") {
            userWin = compChoice == "rock" ? true : false;
        }

        else {
            userWin = compChoice == "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice is clicked", choiceId);
        playGame(userChoice);
    })
});

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Match Draw, play Again"
    msg.style.backgroundColor = "blue";
}
