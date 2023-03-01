import { names } from './inc/people.js';

let contenitore = document.getElementById("wrap");
function getNames() {
    names.forEach(element => {
        let utente = document.createElement("div");
        //utente.innerHTML = element.emoji + (element.name.length > 10 ? `${element.name.substring(0, 10)}...` : element.name);
        utente.innerHTML = element.emoji + element.name;
        contenitore.appendChild(utente);
        utente.classList.add("bolla");
        utente.style.fontSize = element.name.length > 12? (window.innerWidth <640 ?"10px":"12px"):"16px";
        utente.style.backgroundColor = element.background_color == 1 ? "#dee3ed" : element.background_color;
        utente.style.color = element.foreground_color == 1 ? "#000000bd" : "#ffffffbd";
    });
}

getNames();