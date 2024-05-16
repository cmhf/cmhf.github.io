// script.js

console.log("JS loaded beginning.")

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const submenu = document.getElementById("submenu");

    menu.addEventListener("click", function() {
        toggleSubMenu()
    });

    function toggleSubMenu() {
        submenu.classList.toggle("show");
        if(submenu.classList.contains("show")) {
            animateSubMenu();
        }
    }

    function animateSubMenu() {
        const items = submenu.querySelectorAll("a");
        items.forEach((item, index) => {
            const angle = (index / (items.length - 1)) * Math.PI * 2;
            const radius = 100;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            item.style.transform = `translate(${x}px, ${y}px)`;
            item.style.opacity = 1;
        });
    }
});