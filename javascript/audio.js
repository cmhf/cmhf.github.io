document.addEventListener("DOMContentLoaded", (event) => {
    const audio = document.getElementById("music_BG");
    const container = document.getElementById("container");
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let audioSource = null;
    let analyser = null;

    audioSource = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 128;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barWidth = canvas.width / bufferLength;

    let x = 0;
    function animate() {
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            ctx.fillStyle = "#A0C0F0";
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth;
        }

        requestAnimationFrame(animate);
    }

    animate()
});

/*
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

    function toggleMute() {
        if (audio.muted) {
            audio.muted = false;
            muteButton.src = "assets/images/mute_button.png";
        } else {
            audio.muted = true;
            muteButton.src = "assets/images/unmute_button.png"
        }
    }
});
*/