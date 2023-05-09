const mainTitle = document.getElementById("main-title");
const mainSubitle = document.getElementById("main-subtitle");
const navbar = document.getElementById("navbar");
const body = document.getElementById("body");
const bodyContainer = document.getElementById("body-container");

setTimeout(() => {
    mainTitle.style.transition = "1000ms";
    mainTitle.style.opacity = "1";

    mainSubitle.style.transition = "1000ms";
    mainSubitle.style.opacity = "1";
}, 5);

setTimeout(() => {
    navbar.style.transition = "200ms";
    navbar.style.opacity = "1";
    bodyContainer.style.overflowY = "scroll";
}, 10);