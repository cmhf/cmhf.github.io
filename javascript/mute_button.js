document.addEventListener("DOMContentLoaded", (event) => {
    const audio = document.getElementById("music_BG");
    const muteButton = document.getElementById("music_button");

    
    muteButton.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            muteButton.src = "assets/images/mute_button.png";
        } else {
            audio.muted = true;
            muteButton.src = "assets/images/unmute_button.png";
        }
    });
});