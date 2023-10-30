//Commentare la riga qua sotto dopo aver verificato che ci sia l' alert e che quindi sia tutto collegato
//alert("Test di collegamento")
const caricaSecondi = () => {
    let input = document.querySelector("#sec").value;
    let ore = input / 3600;
    ore = Math.round(ore);
    let minuti = (input - (ore * 3600)) / 60;
    minuti = Math.round(minuti);
    let secondi = input - ((ore * 3600) + (minuti * 60));
    let message = "h: " + ore + " | m: " + minuti + " | s: " + secondi;
    document.getElementById("div_giorno").innerHTML = message;
}

const caricaGiorni = () => {
    let giorni = document.querySelector("#g").value;
    let ore = document.querySelector("#h").value;
    let minuti = document.querySelector("#m").value;
    let secondi = document.querySelector("#s").value;
    let totaleSecondi = (giorni * 86400) + (ore * 3600) + (minuti * 60) + (secondi * 1);
    let message = "Totale secondi: " + totaleSecondi;
    document.getElementById("div_secondi").innerHTML = message;
}