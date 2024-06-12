function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async (event) => {
    const bg_div = document.getElementById("bg_div");

    bg_div.style.width = "50%"

    const homeButton = document.getElementById("home_button");

    homeButton.style.bottom = "20px";
    homeButton.style.opacity = 1;
});