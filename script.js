const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {
  music.volume = 0.4;

  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play().then(() => {
        musicBtn.textContent = "🔊 Music On";
        musicBtn.classList.add("playing");
      });
    } else {
      music.pause();
      musicBtn.textContent = "🎵 Play Music";
      musicBtn.classList.remove("playing");
    }
  });
}
