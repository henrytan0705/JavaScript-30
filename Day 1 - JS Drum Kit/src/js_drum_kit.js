document.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    console.log(`Pressed ${e.key}`);
    if (!audio) return;
    key.classList.add("highlight"); 
    audio.currentTime = 0;
    audio.play();
});

document.addEventListener("keyup", (e) => {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(`End of press ${e.key}`)
    if (!key) return;
    key.classList.remove("highlight");
})