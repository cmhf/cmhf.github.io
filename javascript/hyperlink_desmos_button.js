document.addEventListener("DOMContentLoaded", (event) => {
    const desButton = document.getElementById("desmos_button");

    desButton.addEventListener('click', () => {
        
    })

    desButton.classList.add("animate_flash");
    desButton.addEventListener('animationend', () => {
        desButton.classList.remove('animate_flash');
    }, {once: true});
});