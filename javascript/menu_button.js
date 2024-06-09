function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async (event) => {
    console.log("Page ready.");

    const mainMenuButton = document.getElementById("home_menu");
    const cseButton = document.getElementById("essential_icon");
    const cspButton = document.getElementById("principal_icon");
    const csaButton = document.getElementById("application_icon");
    const csButton  = document.getElementById("cybersecurity_icon");

    mainMenuButton.style.opacity = 0;
    await wait(200);
    mainMenuButton.style.opacity = 1;


    
    function homeMenuAnimate() {
        console.log("Start anim: homeMenuAnimate()");
    }

});