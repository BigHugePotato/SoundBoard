// document.addEventListener("DOMContentLoaded", (event) => {
const sounds = [
  { fileName: "dry-fart.mp3" },
  { fileName: "eD" },
  { fileName: "your-phone-linging.mp3" },
];

const soundBoard = document.getElementById("soundboard");

const createSoundBoard = (audioscr) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = audioscr.fileName;

  const audioEl = document.createElement("audio");

  audioEl.src = `${SoundEffects}/${audioscr.fileName}`

  audioscr.audioEl = audioEl
};

sounds.forEach((soundObj) => {
  soundBoard.append(createSoundBoard(soundObj));
});

createSoundBoard();

