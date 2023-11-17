let roomFunctions = { "rum 1": rum1, "rum 2": rum2, "rum 3": rum3 };

// function getInputGame(room) {
//     if (activeRooms.includes(room)) {
//         roomFunctions[room]();
//     }
// }
function getInputGame(room) {
    inputGame = document.querySelector("#getInput").value.trim(); // Get and trim the input
    if (activeRooms.includes(room)) {
        roomFunctions[room]();
    }
}

function rum1() {
    let numberString = '' + randomNumber;
    if (roomTries[0] > 0) {
        if (inputGame == numberString) {
            // Correct guess
            activeRooms[0] = "";  // Mark room 1 as completed
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "För att gå vidare till nästa rum skriv: rum";
            points++;
            document.querySelector(".playerPoints").innerText = points;
            submitButton.onclick = getInput;
            enter = 0;
            inputId.value = "";
            gameOver();
        } else {
            // Incorrect guess
            roomTries[0]--;
            let guessMessage = inputGame < numberString ? "för LÅGT" : "för HÖGT";
            uppgiften.innerText = `Fel! ${guessMessage} du har ${roomTries[0]} gissningar kvar.`;
            valen.innerText = "Välj ett nummer mellan : 1-100";
            inputId.value = "";

            if (roomTries[0] === 0) {
                // Out of tries
                activeRooms[0] = "";  // Mark room 1 as completed
                uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
                valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                submitButton.onclick = getInput;
                enter = 0;
                inputId.value = "";
                gameOver();
            }
        }
    }
}
// Additional cases and logic as per your previous code
function rum2() {
    if (roomTries[1] > 0) {
        if (inputGame == 6) { 
           
            activeRooms[1] = "";  
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "För att gå vidare till nästa rum skriv: rum";
            points++;
            document.querySelector(".playerPoints").innerText = points;
            submitButton.onclick = getInput;
            enter = 0;
            inputId.value = "";
            gameOver();
        } else {
            // Incorrect answer logic
            roomTries[1]--;
            uppgiften.innerText = "Fel! Du har " + roomTries[1] + " försök kvar.";
            valen.innerText = "Välj ett nummer mellan: 1-6";
            inputId.value = "";

            if (roomTries[1] === 0) {
                // Out of tries
                activeRooms[1] = "";  // Mark room 2 as completed
                uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
                valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                submitButton.onclick = getInput;
                enter = 0;
                inputId.value = "";
                gameOver();
            }
        }
    }
}
function rum3() {
    if (roomTries[2] > 0) {
        if (inputGame  == "cool") { // Assuming the correct answer is "vatten"
            // Correct answer logic
            activeRooms[2] = "";  // Mark room 3 as completed
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "Du har klarat alla rum!";
            points++;
            document.querySelector(".playerPoints").innerText = points;
            submitButton.onclick = getInput;
            enter = 0;
            inputId.value = "";
            gameOver();
        } else {
            // Incorrect answer logic
            roomTries[2]--;
            uppgiften.innerText = "Fel! Du har " + roomTries[2] + " försök kvar.";
            valen.innerText = "Försök igen";
            inputId.value = "";

            if (roomTries[2] === 0) {
                // Out of tries
                activeRooms[2] = "";  // Mark room 3 as completed
                uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
                valen.innerText = "Du har klarat alla rum!";
                submitButton.onclick = getInput;
                enter = 0;
                inputId.value = "";
                gameOver();
            }
        }
    }
}