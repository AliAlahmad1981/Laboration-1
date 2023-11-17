// My global vaiables
let playerName;
let points = 0;
let input;
let inputGame;
let enter = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;
let activeRooms = ["rum 1", "rum 2", "rum 3"];
let roomTries = [6, 3, 1]; // Adjusted number of tries for room 2


// DOM element references
const uppgiften = document.querySelector(".uppgift");
const valen = document.querySelector(".val");
const inputId = document.querySelector("#getInput");
const submitButton = document.querySelector(".getInput button");
const nameInput = document.getElementById("nameInput");



// Initialize Game
function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    activeRooms = ["rum 1", "rum 2", "rum 3"];
    roomTries = [6, 3, 1];
     setupEventListeners();
}

// Event listeners

nameInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        getName();
    }
});

document.querySelector(".getInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        enter === 1 ? getInputGame() : getInput();
    }
});

function startGame() {
    document.querySelector(".startGame").style.display = "none";
}
function getName() {
    playerName = nameInput.value;
    // playerName = document.getElementById("nameInput").value;

    document.querySelector(".enterNameDiv").style.display = "none";
    document.querySelector(".playerName").innerText = playerName;
    document.querySelector(".playerPoints").innerText = points;
    uppgiften.innerText = "Välkommen " + playerName + "! Du står nu framför en stor och tung dörr. Du vet inte vad som väntar bakom dörren.";
    valen.innerText = "För att öppna skriv: öppna";
}


function gameOver() {
    if (activeRooms.every(room => room === "")) {
        setTimeout(gameOverText, 4000);
    }
}

function gameOverText() {
    document.querySelector(".gameOver").style.display = "flex";
    document.querySelector(".gameOver h4").innerText = "Bra jobbat " + playerName + "! Du fick " + points + " nycklar";

}
// Start Game Initialization
window.onload = initGame;