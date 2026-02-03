const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// ---- NO BUTTON RUN AWAY ----
if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
}

// ---- YES BUTTON ACTION ----
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });
}
