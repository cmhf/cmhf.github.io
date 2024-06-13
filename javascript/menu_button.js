out = true;

function homeMenuAnimate() {
    const cseButton = document.getElementById("essential_icon");
    const cspButton = document.getElementById("principal_icon");
    const csaButton = document.getElementById("application_icon");
    const csButton  = document.getElementById("cybersecurity_icon");
    
    
    if (out == false) {
        console.log("Start anim: homeMenuAnimate() | Condition: out = true;");
        cseButton.style.left = "50%";
        cspButton.style.top = "40%";
        csaButton.style.left = "50%";
        csButton.style.top = "40%";
        out = true;
    } else {
        console.log("Start anim: homeMenuAnimate() | Condition: out = false;");
        cseButton.style.left = "15%";
        cspButton.style.top = "15%";
        csaButton.style.left = "86%";
        csButton.style.top = "67%";
        out = false;
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async (event) => {
    const mainMenuButton = document.getElementById("home_menu");
    console.log("menu_button.js | READY");
    
    mainMenuButton.style.opacity = 0;
    await wait(200);
    mainMenuButton.style.opacity = 1;


    mainMenuButton.addEventListener("click", homeMenuAnimate);

});