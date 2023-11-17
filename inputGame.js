// My global vaiables
let inputGame;
let counter = 2;

// My print const shortcuts
const uppgiften = document.querySelector(".uppgift");
const valen = document.querySelector(".val");

/**
 * 
 *
 * 
 */
function getInputGame() {
    inputGame = document.querySelector("#getInputGame").value;
    // switch() {
    //     case: ;
    //     break;
    // }
    rum1();



}

function rum1() {
    console.log(inputGame);
    console.log(counter);

    if (counter > -1) {

        if(inputGame == 6) {
            uppgiften.innerText = "Rätt " + playerName + "!";
        } else if (counter == 0) {
            uppgiften.innerText = "Du har för brukat dina försök. Du fick ingen nyckel.";
        } 
        else {
            uppgiften.innerText = "Fel! du har " + counter + " kvar." ;
            counter--;
        }
    }
}