// My global vaiables
let playerName;

/**
 * Removes startdiv
 */
function startGame() {
    document.querySelector(".startGame").style.display = "none";
}

/**
*
*
*
*/
function getName() {
    playerName = document.getElementById("nameInput").value;
    console.log("hello");
    console.log(playerName);
    document.querySelector(".enterNameDiv").style.display = "none";
    document.querySelector(".playerName").innerText = playerName;
    // document.querySelector(".uppgift").innerText = "Välkommen till fångarna på fortet " + playerName;
}