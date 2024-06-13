document.addEventListener("DOMContentLoaded", (event) => {
    const cseIcon = document.getElementById("essential_icon");
    const apcsaIcon = document.getElementById("application_icon");
    const apcspIcon = document.getElementById("principal_icon");
    const csIcon = document.getElementById("cybersecurity_icon");

    console.log("aux_buttons.js | READY")

    cseIcon.addEventListener("click", () => {
        console.log("Open: Blender Temporary File, from: cseIcon");
        window.open("blender.html");
    })

    apcspIcon.addEventListener("click", () => {
        console.log("Open: Blender Temporary File, from: apcspIcon");
        window.open("blender.html");
    })

    apcsaIcon.addEventListener("click", () => {
        console.log("Open: Blender Temporary File, from: apcsaIcon");
        window.open("blender.html");
    })

    csIcon.addEventListener("click", () => {
        console.log("Open: Blender Temporary File, from: csIcon");
        window.open("blender.html");
    })
});