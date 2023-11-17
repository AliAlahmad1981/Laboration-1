function startGame() {
    document.querySelector(".startGame").style.display = "none";
}



let playerName;
let input;


function getName() {
    playerName = document.getElementById("nameInput").value;
    console.log("hello");
    console.log(playerName);
    document.querySelector(".enterNameDiv").style.display = "none";
    document.querySelector(".playerName").innerText = playerName;
}


function getInput() {
    var input = document.getElementById("getInput").value;
    console.log(input);
}