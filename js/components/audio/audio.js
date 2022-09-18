const activeMusic = (datos) => {
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
};

export default activeMusic;
