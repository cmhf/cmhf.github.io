document.addEventListener("DOMContentLoaded", (event) => {
    const audio = document.getElementById("bgMusic");
    const muteButton = document.getElementById("muteButton");

    muteButton.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            muteButton.src = "mute_button.png";
        } else {
            audio.muted = true;
            muteButton.src = "unmute_button.png";
        }
    });
});