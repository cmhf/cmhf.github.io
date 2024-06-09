function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async (event) => {
    const musicButton   = document.getElementById("music_button");
    const desButton     = document.getElementById("desmos_button");
    const blenderButton = document.getElementById("blender_button");
    const githubButton  = document.getElementById("github_button");

    const bg_div = document.getElementById("bg_div");

    bg_div.style.width = "50%"

    const cover = document.getElementById("cover");

    cover.style.bottom = "0px";
    await wait(700);
    musicButton.style.opacity = 1;
    musicButton.style.bottom = "20px";
    await wait(500);
    desButton.style.opacity = 1;
    desButton.style.bottom = "20px";
    await wait(500);
    blenderButton.style.opacity = 1;
    blenderButton.style.bottom = "20px";
    await wait(500);
    githubButton.style.opacity = 1;
    githubButton.style.bottom = "20px";
});