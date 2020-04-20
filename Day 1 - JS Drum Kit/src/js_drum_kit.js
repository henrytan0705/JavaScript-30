document.addEventListener("keydown", (e) => {
    playSound(e);
});

document.addEventListener("keyup", (e) => {
    removeStyle(e);
})

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;
    key.classList.add("highlight");
    audio.currentTime = 0;
    audio.play();
}

function removeStyle(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if (!key) return;
    key.classList.remove("highlight");
}

