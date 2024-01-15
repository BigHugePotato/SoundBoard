const sounds = [
  { fileName: "dry-fart.mp3", name: "Fart Dry" },
  { fileName: "perfect-fart.mp3", name: "Fart Wet" },
  { fileName: "eD.mp3", name: "Emotional Damage" },
  { fileName: "your-phone-linging.mp3", name: "Phone Linging" },
  { fileName: "ah-shit-here-we-go-again.mp3", name: "Again" },
  { fileName: "anime-wow.mp3", name: "Wow" },
  { fileName: "aughhh.mp3", name: "Aguhh" },
  { fileName: "bombastic-side-eye.mp3", name: "Side Eye" },
  { fileName: "brah.mp3", name: "Brah" },
  { fileName: "chinese-rap-song.mp3", name: "Rap Song" },
  { fileName: "clash-royale-hog-rider.mp3", name: "Hog Rider" },
  { fileName: "dog-doing.mp3", name: "Dog Doing" },
  { fileName: "gay-echo.mp3", name: "Gay Echo" },
  { fileName: "toothless-dancing.mp3", name: "Dragon Dance" },
  { fileName: "vine-boom.mp3", name: "Vine Boom" },
  { fileName: "yeah-boiii.mp3", name: "Yeah Boi" },
  { fileName: "among-us.mp3", name: "Among Us" },
  { fileName: "best-friends.mp3", name: "Best Friends" },
  { fileName: "bonk.mp3", name: "Bonk!" },
  { fileName: "continue.mp3", name: "To Be Continued" },
  { fileName: "they-ask.mp3", name: "You're Fine" },
  { fileName: "snore-mimi.mp3", name: "Snore Mimi" },
  { fileName: "suprise-mf.mp3", name: "Suprise Mf" },
  { fileName: "wide-putin.mp3", name: "Wide Putin" },
  { fileName: "laugh.mp3", name: "HAHA" },
];

const soundBoard = document.getElementById("soundboard");

const createSoundBoard = (audioscr) => {
  const buttonEl = document.createElement("button");
//   const labelEl = document.createElement
  buttonEl.setAttribute("title", audioscr.name);

  const audioEl = document.createElement("audio");
  audioEl.src = `SoundEffects/${audioscr.fileName}`;
  audioscr.audioEl = audioEl;
  audioscr.isPlaying = false;

  buttonEl.addEventListener("click", () => {
    if (audioscr.isPlaying) {
      audioEl.pause();
      audioEl.currentTime = 0;
      audioscr.isPlaying = false;
      buttonEl.classList.remove("rainbow-animation");
    } else {
      audioEl.play();
      audioscr.isPlaying = true;
      buttonEl.classList.add("rainbow-animation");
    }
  });

  audioEl.addEventListener("ended", () => {
    audioscr.isPlaying = false;
    buttonEl.classList.remove("rainbow-animation");
  });
  return buttonEl;
};

sounds.forEach((soundObj) => {
  soundBoard.append(createSoundBoard(soundObj));
});
