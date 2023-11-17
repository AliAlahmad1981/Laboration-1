// My global vaiables
let input;

/**
 * 
 *
 * 
 */
function getInput() {
    input = document.querySelector("#getInput").value;
    console.log(input);

    switch (input) {
        case "start":
            document.querySelector(".uppgift").innerText = "Välkommen till fångarna på fortet " + playerName + "! Du står nu framför en stor och tung dörr";
            document.querySelector(".val").innerText = "För att öppna säg: öppna";
            break;
        case "hej":
            document.querySelector(".uppgift").innerText = "Hej " + playerName;
            break;
        case "?":
            document.querySelector(".uppgift").innerText = "Vad undrar du " + playerName;
            break;
        default:
            document.querySelector(".uppgift").innerText = "Jag förstår inte vad du menar...testa igen";
    }
}