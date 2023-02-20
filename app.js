const mainTitle = document.getElementById("main-title");
const mainSubitle = document.getElementById("main-subtitle");
const navbar = document.getElementById("navbar");
const body = document.getElementById("body");

setTimeout(() => window.scrollTo(0, 0), 1);

setTimeout(() => {
    mainTitle.style.opacity = "1";
    mainSubitle.style.opacity = "1";
}, 500);

setTimeout(() => {
    navbar.style.opacity = "1";
    body.style.overflowY = "scroll";
}, 1500);
