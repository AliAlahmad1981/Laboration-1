var getInput = function () {
    // let input = inputId.value.toLowerCase();
    // inputGame = input; // Set inputGame to the current input value
    var input = document.querySelector("#getInput").value;
    switch (input) {
        case "öppna":
            uppgiften.innerText = " Welcome to the fort " + playerName + " ! Do you dare to go further?/Gunde";
            valen.innerText = "To continue, write: rum";
            inputId.value = "";
            break;
        case "rum":
            let availableRooms = activeRooms.filter(room => room !== "");
            uppgiften.innerText = "Rum som är öppna är: " + availableRooms.join(", ");
            valen.innerText = "För att gå in välj ett rum: " + availableRooms.join(" ");
            inputId.value = "";
            break;
        case "rum 1":
            if (activeRooms[0] !== "") {
                uppgiften.innerText = "Här ska du gissa på ett nummer mellan 1 och 100. " +
                                      "Du får veta om det är för högt eller för lågt. Du har sex chanser. Lycka till/Gunde";
                valen.innerText = "Välj ett nummer mellan: 1-100";
                submitButton.onclick = function() { getInputGame("rum 1"); };
                enter = 1;
                inputId.value = "";
            } else {
                uppgiften.innerText = "Rummet är låst. Du har redan förbrukat ditt försök/Gunde";
                valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                inputId.value = "";
            }
            break;
        
            case "rum 2":
            if (activeRooms[1] !== "") {
                uppgiften.innerText = "Du ska leta efter en nyckel i lådorna! " +
                                      "Du ska välja ett nummer som kan bli 36 om du tar detta numret gånger sig själv. Du har tre försök.";
                valen.innerText = "Välj ett nummer mellan: 1-6";
                submitButton.onclick = function() { getInputGame("rum 2"); };
                enter = 1;
                inputId.value = "";
            } else {
                uppgiften.innerText = "Rummet är låst. Du har redan förbrukat ditt försök/Gunde";
                valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                inputId.value = "";
            }
            break;
           
       
            case "rum 3":
                if (activeRooms[2] !== "") {
                    uppgiften.innerText = "Vilken dryck är den starkaste som finns?";
                    valen.innerText = "Skriv in ditt svar: ";
                    submitButton.onclick = function() { getInputGame("rum 3"); };
                    enter = 1;
                    inputId.value = "";
                } else {
                    uppgiften.innerText = "Rummet är låst. Du har redan förbrukat ditt försök/Gunde";
                    valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                    inputId.value = "";
                }
                break;
    
        case "hej":
            uppgiften.innerText = "Hej " + playerName;
            inputId.value = "";
            break;
        case "hjälp":
            uppgiften.innerText = "Är du förvirrad " + playerName + "?";
            valen.innerText = "Testa att skriva: rum";
            inputId.value = "";
            break;
        
            case "¡aksuf!":
                points = 99;
                activeRooms = ["", "", ""]; // Mark all rooms as completed
                uppgiften.innerText = "Du har aktiverat en hemlig kod! Alla rum är nu klarade.";
                valen.innerText = "Grattis!";
                inputId.value = "";
                gameOver();
                break;
        default:
            uppgiften.innerText = "Jag förstår inte vad du menar...testa igen";
            valen.innerText = "Testa att skriva: rum";
            inputId.value = "";
            break;
    }
}
// inputId.value = ""; // Clear the input field after processing