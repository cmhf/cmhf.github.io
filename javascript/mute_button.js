document.addEventListener("DOMContentLoaded", (event) => {
    const audio = document.getElementById("music_BG");
    const muteButton = document.getElementById("music_button");
    let playing = !(audio.paused);

    muteButton.addEventListener('click', () => {
        if (playing) {
            audio.pause();
            muteButton.src = "assets/images/media/play.png";
            playing = !(audio.paused);
        } else {
            audio.play();
            muteButton.src = "assets/images/media/pause.png";
            playing = !(audio.paused);
        }
        console.log(playing);
    });

    muteButton.classList.add("animate_flash");
    muteButton.addEventListener('animationend', () => {
        muteButton.classList.remove('animate_flash');
    }, {once: true});
});