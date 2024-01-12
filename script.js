const sounds = [
  { fileName: "dry-fart.mp3", isPlaying: false },
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
  { fileName: "toothless-dancing.mp3", isPlaying: false },
  { fileName: "vine-boom.mp3" },
  { fileName: "yeah-boiii.mp3" },
];

const soundBoard = document.getElementById("soundboard");

const createSoundBoard = (audioscr) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = audioscr.fileName;
//   buttonEl.addEventListener("click", () => audioEl.play());

  const audioEl = document.createElement("audio");
  audioEl.src = `SoundEffects/${audioscr.fileName}`;
    audioscr.audioEl = audioEl;
    audioscr.isPlaying = false;

  buttonEl.addEventListener("click", () => {
    if (audioscr.isPlaying) {
      audioEl.pause();
      audioEl.currentTime = 0;
      audioscr.isPlaying = false
      buttonEl.classList.remove("rainbow-animation", "btnDown");
    } else {
      audioEl.play();
      audioscr.isPlaying = true
      buttonEl.classList.add("rainbow-animation", "btnDown");
    }
  });

  audioEl.addEventListener("ended", () => {
    audioscr.isPlaying = false
    buttonEl.classList.remove("rainbow-animation", "btnDown");
  });
  return buttonEl;
};

sounds.forEach((soundObj) => {
  soundBoard.append(createSoundBoard(soundObj));
});
