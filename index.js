import { names } from './inc/people.js';

let contenitore = document.getElementById("wrap");

async function getNames() {
    console.log("Loading wall");
    await names.forEach(element => {
        let utente = document.createElement("div");
        utente.innerHTML = element.emoji + element.name;
        contenitore.appendChild(utente);
        utente.classList.add("bolla");
        utente.style.backgroundColor = element.background_color != 1 ? element.background_color : "#dee3ed";
        utente.style.color = element.background_color != 1 ? element.foreground_color : "#2f3237";
    });
    await console.log("Loaded %s names", names.length);
}

getNames();