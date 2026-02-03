const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

if (yesBtn && music) {
  yesBtn.addEventListener("click", () => {
    music.volume = 0.5;

    music.play().then(() => {
      // remember that music is allowed
      localStorage.setItem("playMusic", "true");

      // small delay so music actually starts
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 300);
    }).catch(() => {
      // even if play fails, still navigate
      window.location.href = "yes.html";
    });
  });
}
