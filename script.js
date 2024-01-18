const sounds = [
  { fileName: "eD.mp3", name: "Emotional Damage", color: "purple" },
  { fileName: "continue.mp3", name: "To Be Continued", color: "darkorange" },
  {
    fileName: "ah-shit-here-we-go-again.mp3",
    name: "Again",
    color: "darkorange",
  },
  { fileName: "perfect-fart.mp3", name: "Fart Wet", color: "green" },
  { fileName: "dry-fart.mp3", name: "Fart Dry", color: "green" },
  { fileName: "bombastic-side-eye.mp3", name: "Side Eye", color: "purple" },
  { fileName: "aughhh.mp3", name: "Aguhh", color: "red" },
  { fileName: "anime-wow.mp3", name: "Wow", color: "pink" },
  { fileName: "vine-boom.mp3", name: "Vine Boom", color: "green" },
  { fileName: "bonk.mp3", name: "Bonk!", color: "green" },
  { fileName: "dog-doing.mp3", name: "Dog Doing", color: "purple" },
  { fileName: "brah.mp3", name: "Brah", color: "red" },
  { fileName: "snore-mimi.mp3", name: "Snore Mimi", color: "pink" },
  { fileName: "among-us.mp3", name: "Among Us", color: "blue" },
  { fileName: "best-friends.mp3", name: "Best Friends", color: "blue" },
  { fileName: "they-ask.mp3", name: "You're Fine", color: "purple" },
  { fileName: "suprise-mf.mp3", name: "Suprise Mf", color: "red" },
  { fileName: "downer_noise.mp3", name: "Sad Trumpet", color: "" },
  { fileName: "nooo.mp3", name: "Nooo", color: "" },
  { fileName: "laugh.mp3", name: "HAHA", color: "blue" },
  { fileName: "wide-putin.mp3", name: "Wide Putin", color: "limegreen" },
  {
    fileName: "toothless-dancing.mp3",
    name: "Dragon Dance",
    color: "limegreen",
  },
  { fileName: "yeah-boiii.mp3", name: "Yeah Boi", color: "limegreen" },
  { fileName: "obi-wan-hello-there.mp3", name: "Obi-Wan", color: "" },
  { fileName: "spongebob-fail.mp3", name: "Fail", color: "" },
];

const soundBoard = document.getElementById("soundboard");

const createSoundBoard = (audioscr) => {
  const buttonEl = document.createElement("button");
  buttonEl.setAttribute("title", audioscr.name);
  buttonEl.style.backgroundColor = audioscr.color || "gray";

  const audioEl = document.createElement("audio");
  audioEl.src = `SoundEffects/${audioscr.fileName}`;
  audioscr.audioEl = audioEl;
  audioscr.isPlaying = false;

  buttonEl.addEventListener("click", () => {
    if (audioscr.isPlaying) {
      audioEl.pause();
      audioEl.currentTime = 0;
      audioscr.isPlaying = false;
      buttonEl.classList.remove("playing");
    } else {
      audioEl.play();
      audioscr.isPlaying = true;
      buttonEl.classList.add("playing");
    }
  });

  audioEl.addEventListener("ended", () => {
    audioscr.isPlaying = false;
    buttonEl.classList.remove("playing");
  });
  return buttonEl;
};

sounds.forEach((soundObj) => {
  soundBoard.append(createSoundBoard(soundObj));
});

const volumeSlider = document.getElementById("volumeSlider");

volumeSlider.addEventListener("input", (El) => {
  const volume = El.target.value;
  sounds.forEach((soundObj) => {
    if (soundObj.audioEl) {
      soundObj.audioEl.volume = volume;
    }
  });
});

// Make the stop button element.
const stopButton = document.getElementById("stopButton");

// Add a click event listener to the stop button.
stopButton.addEventListener("click", () => {
  sounds.forEach((soundObj) => {
    // If the sound has an 'audioEl' and it is playing, we pause it.
    if (soundObj.audioEl && !soundObj.audioEl.paused) {
      soundObj.audioEl.pause();
      soundObj.audioEl.currentTime = 0;
      soundObj.isPlaying = false;

      // Useing template literals to insert the sound object's name.
      const soundButton = soundBoard.querySelector(
        `button[title='${soundObj.name}']`
      );
      if (soundButton) {
        soundButton.classList.remove("playing");
      }
    }
  });
});
