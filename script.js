const music = document.getElementById("bgMusic");

// remember if user already allowed music
const musicAllowed = localStorage.getItem("musicAllowed");

// start music function
function startMusic() {
  if (!music) return;

  music.volume = 0.4;
  music.play().then(() => {
    localStorage.setItem("musicAllowed", "true");
  }).catch(() => {});
}

// first interaction unlock
if (!musicAllowed) {
  document.addEventListener("click", startMusic, { once: true });
  document.addEventListener("touchstart", startMusic, { once: true });
} else {
  // auto-play on navigation after first approval
  startMusic();
}

/* ---------- NO button ---------- */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

/* ---------- YES button ---------- */
const yesBtn = document.getElementById("yesBtn");
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });
}
