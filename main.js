// My global vaiables
let playerName;



 function getName() {
    console.log(playerName);
    document.querySelector(".enterNameDiv").style.display = "none";
    document.querySelector(".playerName").innerText = playerName;
    document.querySelector(".uppgift").innerText = "Välkommen till fångarna på fortet " + playerName + "! Du står nu framför en stor och tung dörr";
    document.querySelector(".val").innerText = "För att öppna säg: öppna";
}