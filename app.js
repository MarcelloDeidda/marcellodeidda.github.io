const mainTitle = document.getElementById("main-title");
const mainSubitle = document.getElementById("main-subtitle");
const bodyContainer = document.getElementById("body-container");

setTimeout(() => {
    mainTitle.style.transition = "1000ms";
    mainTitle.style.opacity = "1";

    mainSubitle.style.transition = "1000ms";
    mainSubitle.style.opacity = "1";
}, 200);

setTimeout(() => {
    bodyContainer.style.overflowY = "scroll";
}, 800);