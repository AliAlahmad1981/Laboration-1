function getInput() {
    input = document.querySelector("#getInput").value;
    console.log(input);
    const uppgiften = document.querySelector(".uppgift");
    const valen = document.querySelector(".val");
    const getInput = document.querySelector(".getInput");
    const getInputGame = document.querySelector(".getInputGame");

    switch (input) {
        case "öppna":
            uppgiften.innerText = "Välkommen till fortet " + playerName + "!" + " Vågar du gå vidare?/Gunde";
            valen.innerText = "För att gå vidare säg: vidare";
            break;
        case "vidare":
            uppgiften.innerText = "Du har kommit till ditt första rum " + playerName + " /Gunde";
            valen.innerText = "För att gå in i första rummet säg: rum1";
            break;
        case "rum1":
            getInput.style.display = "none";
            getInputGame.style.display = "flex";
            uppgiften.innerText = "Du ska leta efter en nyckel i lådorna /Gunde Du ska ta ett nummer som kan blir 36 om du tar nummret gånger sig själv du har tre försök";
            valen.innerText = "Välj att svara mellan något nummer mellan : 1-6";
            break;
        case "hej":
            uppgiften.innerText = "Hej " + playerName;
            break;
        case "?":
            uppgiften.innerText = "Är du förvirrad " + playerName;
            break;
        default:
            uppgiften.innerText = "Jag förstår inte vad du menar...testa igen";
    }
}