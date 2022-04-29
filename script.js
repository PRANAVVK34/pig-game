// pig game


//initial state
let scores, activePlayer, currentScore;

scores = [0, 0];
activePlayer = 1;
currentScore = 0;

//dom selections
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let currentScore1 = document.getElementById("currentScore1");
let currentScore2 = document.getElementById("currentScore2");

let currentPlayer1 = document.getElementById("currentPlayer1");
let currentPlayer2 = document.getElementById("currentPlayer2");

let diceDom = document.getElementById("dice");
let hold = document.getElementById("hold");
let diceRoll = document.getElementById("rollDice");

let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");


//

player1.style.display = "block"
player2.style.display = "block"


//next player
const uiUpdate = () => {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    currentScore = 0;
    currentScoreText1 = 0
    currentScoreText2 = 0

    currentPlayer1.classList.toggle("hide")
    currentPlayer2.classList.toggle("hide")


}

//roll dice function
const rollDice = () => {

    diceDom.style.display = "block";

    let diceCount = Math.floor(Math.random() * 6 + 1);

    diceDom.textContent = diceCount;

    if (diceCount !== 1) {
        // add current score
        currentScore += diceCount;
        document.getElementById("currentScore" + activePlayer).textContent = currentScore;
    }
    else {

        uiUpdate();

    }


}

//hold points
const holdHandler = () => {
    scores[activePlayer - 1] += currentScore;
    document.getElementById("score" + activePlayer).textContent = scores[activePlayer - 1];


    if (scores[activePlayer - 1] > 19) {


        hold.style.display = "none";
        diceRoll.style.display = "none";

        diceDom.style.display = "none";

        document.getElementById("player" + activePlayer).textContent = "winner!"
        document.getElementById("player" + activePlayer).style.color = "white"

        currentPlayer1.classList.add("hide")
        currentPlayer2.classList.add("hide")


    }
    else {
        uiUpdate();
    }

}


//game restart
const restart = () => {
    scores = [0, 0];
    activePlayer = 1;
    currentScore = 0;

    currentScore1.textContent = 0
    currentScore2.textContent = 0

    console.log(currentScore1.textContent);
    console.log(currentScore2.textContent);

    score1.textContent = 0;
    score2.textContent = 0;

    hold.style.display = "block";
    diceRoll.style.display = "block";



    diceDom.style.display = "none";

    player1.textContent = "PLAYER 1"
    player2.textContent = "PLAYER 2"
    player1.style.color = "black"
    player2.style.color = "black"

    currentPlayer1.classList.remove("hide")
    currentPlayer2.classList.add("hide")

}
