const mainTitle = document.getElementById("main-title");
const mainSubitle = document.getElementById("main-subtitle");
const navbar = document.getElementById("navbar");
const body = document.getElementById("body");
const bodyContainer = document.getElementById("body-container");

if (bodyContainer.scrollTop === 0) {
    setTimeout(() => {
        mainTitle.style.transition = "1000ms";
        mainTitle.style.opacity = "1";

        mainSubitle.style.transition = "1000ms";
        mainSubitle.style.opacity = "1";
    }, 200);
    
    setTimeout(() => {
        navbar.style.transition = "200ms";
        navbar.style.opacity = "1";
        bodyContainer.style.overflowY = "scroll";
    }, 400);
} else {
    mainTitle.style.opacity = "1";
    mainTitle.style.transition = "1000ms";

    mainSubitle.style.opacity = "1";
    mainSubitle.style.transition = "1000ms";

    navbar.style.opacity = "1";
    navbar.style.transition = "200ms";
    bodyContainer.style.overflowY = "scroll";
};