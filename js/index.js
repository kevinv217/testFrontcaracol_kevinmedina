"use strcit";

import cast from "../data/test.json" assert { type: "json" };
// import activeMusic from "./components/audio/audio";


const menu = document.querySelector("#itemMenu").innerHTML;
const logo = document.querySelector("#logoHijo").innerHTML;
const itemsTendencias = document.querySelector("#tendenciasHijos").innerHTML;
const itemsSocial = document.querySelector("#itemsocial").innerHTML;
const itemsPageLead = document.querySelector("#itemPageLead").innerHTML;
const itemsBreadcrumb = document.querySelector("#itemsBreadcrumb").innerHTML;
const itemsLead = document.querySelector("#itemsLead").innerHTML;
const itemsInformacion = document.querySelector("#itemsinformacion").innerHTML;

const templateMenu = Handlebars.compile(menu);
const templateLogo = Handlebars.compile(logo);
const templateTendencias = Handlebars.compile(itemsTendencias);
const templateSocial = Handlebars.compile(itemsSocial);
const templatePageLead = Handlebars.compile(itemsPageLead);
const templateBreadcrumb = Handlebars.compile(itemsBreadcrumb);
const templateLead = Handlebars.compile(itemsLead);
const templateInformacion = Handlebars.compile(itemsInformacion);

const htmlMenu = templateMenu(cast);
const htmlLogo = templateLogo(cast);
const htmlTendencias = templateTendencias(cast);
const htmlSocial = templateSocial(cast);
const htmlPageLead = templatePageLead(cast);
const htmlBreadcrumb = templateBreadcrumb(cast);
const htmlLead = templateLead(cast);
const htmlInformacion = templateInformacion(cast);

document.querySelector("#contenidoMenu").innerHTML = htmlMenu;
document.querySelector("#contenidologo").innerHTML = htmlLogo;
document.querySelector("#contenidoTendencias").innerHTML = htmlTendencias;
document.querySelector("#contenidoSocial").innerHTML = htmlSocial;
document.querySelector("#contenidoPageLead").innerHTML = htmlPageLead;
document.querySelector("#contenidoBreadcrumb").innerHTML = htmlBreadcrumb;
document.querySelector("#contenidoLead").innerHTML = htmlLead;
document.querySelector("#contenidoinformacion").innerHTML = htmlInformacion;

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
