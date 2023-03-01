import { names } from './inc/people.js';

let contenitore = document.getElementById("wrap");
function getNames() {
    names.forEach(element => {
        let utente = document.createElement("div");
        let width = window.innerWidth;
        utente.innerHTML = element.emoji + (element.name.length > 12 ? `${element.name.substring(0, width <600?12:16)}...` : element.name);
        contenitore.appendChild(utente);
        utente.classList.add("bolla");
        utente.style.backgroundColor = element.background_color == 1 ? "#dee3ed" : element.background_color;
        utente.style.color = element.foreground_color == 1 ? "#000000bd" : "#ffffffbd";
    });
}

getNames();