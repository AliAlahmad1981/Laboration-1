// My global vaiables
let playerName;
let points = "0";
let input;
let inputGame;
let counter2 = 2;
let randomNumber;
let counter6 = 6;


// My print const shortcuts
const uppgiften = document.querySelector(".uppgift");
const valen = document.querySelector(".val");
const printInput = document.querySelector(".getInput");
const printInputGame = document.querySelector(".getInputGame");



randomNumber = Math.floor(Math.random() * 100) + 1;


console.log(randomNumber);

/**
 * Removes startdiv
 */
	function getName() {
    playerName = document.getElementById("nameInput").value;
    console.log("hello");
    console.log(playerName);
    console.log(points);
    document.querySelector(".enterNameDiv").style.display = "none";
    document.querySelector(".playerName").innerText = playerName;
    document.querySelector(".playerPoints").innerText = points;
    document.querySelector(".uppgift").innerText = "Välkommen " + playerName + "! Du står nu framför en stor och tung dörr. Du vet inte vad som vänta bakom dörren.";
    document.querySelector(".val").innerText = "För att öppna skriv: öppna";
}

function displayInput() {
    document.querySelector(".getInput").display = "flex";
    document.querySelector(".getInputGame").style.display = "none";
}

function displayGame() {

}