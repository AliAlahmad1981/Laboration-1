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
    console.log(input);
    inputGame = document.querySelector("#getInputGame").value;
    switch(input) {
        case "rum1":
            rum1();
            break;
        case "rum2":
            rum2();
            break;
        case "rum3":
            rum3();
            break;
    }
}

function rum1() {
    console.log(inputGame);
    console.log(randomNumber);
    numberString = '' + randomNumber;
    console.log(numberString);

    if (counter6 > -1) {

        if (inputGame == numberString) {
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "För att gå vidare till nästa rum skriv: rum2";
            points++;
            // printInput.style.display = "flex";
            // printInputGame.style.display = "none";
            document.querySelector(".playerPoints").innerText = points;
        } else if (inputGame < numberString) {
            counter6--;
            uppgiften.innerText = "Fel! för LÅGT du har " + counter6 + " gisningar kvar." ;
            valen.innerText = "Välj ett numer mellan : 1-100";
            // printInput.style.display = "flex";
            // printInputGame.style.display = "none";

        } else if (inputGame > numberString) {
            counter6--;
            uppgiften.innerText = "Fel! för HÖGT du har " + counter6 + " gisningar kvar." ;
            valen.innerText = "Välj ett numer mellan : 1-100";
            document.querySelector("#getInputGame").value = "";

        }
    }  else {
            uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
            valen.innerText = "För att gå vidare till nästa rum skriv: rum2";
            // printInput.style.display = "flex";
            // printInputGame.style.display = "none";
        }
}



// function rum2() {
//     let RandNumber;
//     RandNumber = Math.floor(Math.random * 100);

//     console.log(randNumber);
// }




// function rum1() {
//     console.log(inputGame);
//     console.log(counter2);

//     if (counter2 > -1) {

//         if(inputGame == 6) {
//             uppgiften.innerText = "Rätt " + playerName + "!";
//             valen.innerText = "För att gå vidare till nästa rum skriv: rum2";
//             points++;
//             printInput.style.display = "flex";
//             printInputGame.style.display = "none";
//             document.querySelector(".playerPoints").innerText = points;
//         } else if (counter2 == 0) {
//             uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
//             valen.innerText = "För att gå vidare till nästa rum skriv: rum2";
//             printInput.style.display = "flex";
//             printInputGame.style.display = "none";
//         } 
//         else {
//             uppgiften.innerText = "Fel! du har " + counter2 + " kvar." ;
//             document.querySelector("#getInputGame").value = "";
//             counter2--;
//         }
//     }
// }