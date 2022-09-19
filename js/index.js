"use strict";

import cast from "../data/test.json" assert { type: "json" };
import dataContenidos from "../data/data.js";

//renderizar datos del contenido principal
function showContent(datos) {
  let devolverdatos = datos.map((dato) => {
    // console.log(dato, cast);
    const itemsChild = document.querySelector(`#${dato.itemsChild}`).innerHTML;
    const template = Handlebars.compile(itemsChild);
    const htmlMain = template(cast);

    return (document.querySelector(`#${dato.contenidoParent}`).innerHTML =
      htmlMain);
  });

  return devolverdatos;
}

showContent(dataContenidos);

// function for click music -----------------------------------------------------
function activeMusic(datos) {
  let play = document.querySelector(".activarmusic");
  let audio = new Audio(datos[0].audioUrl);
  let playAudio = false;
  const icon = document.createElement("i");
  icon.className = "ri-play-fill";
  play.appendChild(icon);

  let toggleAudio = play.addEventListener("click", (e) => {
    if ((playAudio = !playAudio)) {
      audio.play();
      icon.className = "ri-play-fill";
    } else {
      audio.pause();
      icon.className = "ri-pause-fill";
    }
    // return (playAudio = !playAudio ? audio.play() : audio.pause());
  });

  return toggleAudio;
}

activeMusic(cast.audioPlayer);
