const sounds = [
  { fileName: "dry-fart.mp3" },
  { fileName: "eD.mp3" },
  { fileName: "your-phone-linging.mp3" },
  { fileName: "ah-shit-here-we-go-again.mp3" },
  { fileName: "anime-wow.mp3" },
  { fileName: "aughhh.mp3" },
  { fileName: "bombastic-side-eye.mp3" },
  { fileName: "brah.mp3" },
  { fileName: "chinese-rap-song.mp3" },
  { fileName: "clash-royale-hog-rider.mp3" },
  { fileName: "dog-doing.mp3" },
  { fileName: "gay-echo.mp3" },
  { fileName: "perfect-fart.mp3" },
  { fileName: "toothless-dancing.mp3" },
  { fileName: "vine-boom.mp3" },
  { fileName: "yeah-boiii.mp3" },
];

const soundBoard = document.getElementById("soundboard");

const createSoundBoard = (audioscr) => {
  const buttonEl = document.createElement("button");

  buttonEl.textContent = audioscr.fileName;

  const audioEl = document.createElement("audio");

  audioEl.src = `SoundEffects/${audioscr.fileName}`;

  buttonEl.addEventListener("click", () => audioEl.play());

  audioscr.audioEl = audioEl;

  return buttonEl;
};

sounds.forEach((soundObj) => {
  soundBoard.append(createSoundBoard(soundObj));
});
