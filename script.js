const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

if (yesBtn && music) {
  yesBtn.addEventListener("click", () => {
    // mark that music is allowed
    localStorage.setItem("playMusic", "true");

    music.volume = 0.6;

    // play music ON CLICK (this is the key)
    music.play()
      .then(() => {
        // give browser a moment to start audio
        setTimeout(() => {
          window.location.href = "yes.html";
        }, 400);
      })
      .catch(() => {
        // even if play fails, still go to yes.html
        window.location.href = "yes.html";
      });
  });
}
