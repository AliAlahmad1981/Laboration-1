function getInput() {
    input = document.querySelector("#getInput").value;
    console.log(input);

    switch (input) {
        case "öppna":
            uppgiften.innerText = "Välkommen till fortet " + playerName + "!" + " Vågar du gå vidare?/Gunde";
            valen.innerText = "För att gå vidare skriv: vidare";
            document.querySelector("#getInput").value = "";
            break;
        case "vidare":
            uppgiften.innerText = "Du har kommit till ditt första rum " + playerName + " /Gunde";
            valen.innerText = "För att gå in i första rummet skriv: rum1";
            document.querySelector("#getInput").value = "";
            break;
        case "rum1":
            printInput.style.display = "none";
            printInputGame.style.display = "flex";
            uppgiften.innerText = "Här ska du gissa på ett nummer mellan 1 och 100 " +
            "Du får veta om det är för högt eller för lågt. Du har sex chanser. Lycka till/Gunde";
            valen.innerText = "Välj ett numer mellan : 1-100";
            break;
        case "hej":
            uppgiften.innerText = "Hej " + playerName;
	 function getInput() {
    }
}



// case "rum1":
//         printInput.style.display = "none";
//         printInputGame.style.display = "flex";
//         uppgiften.innerText = "Du ska leta efter en nyckel i lådorna! " +
//         "Du ska välja ett nummer som kan blir 36 om du tar detta nummret gånger sig själv du har tre försök";
//         valen.innerText = "Välj att svara något nummer mellan : 1-6";
//         break;