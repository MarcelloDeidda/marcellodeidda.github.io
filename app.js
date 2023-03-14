const mainTitle = document.getElementById("main-title");
const mainSubitle = document.getElementById("main-subtitle");
const navbar = document.getElementById("navbar");
const body = document.getElementById("body");

console.log(document.documentElement.scrollTop);

if (document.documentElement.scrollTop === 0) {
    setTimeout(() => {
        mainTitle.style.transition = "1000ms";
        mainTitle.style.opacity = "1";

        mainSubitle.style.transition = "1000ms";
        mainSubitle.style.opacity = "1";
    }, 1000);
    
    setTimeout(() => {
        navbar.style.transition = "200ms";
        navbar.style.opacity = "1";
        body.style.overflowY = "scroll";
    }, 2000);
} else {
    mainTitle.style.opacity = "1";
    mainTitle.style.transition = "1000ms";

    mainSubitle.style.opacity = "1";
    mainSubitle.style.transition = "1000ms";

    navbar.style.opacity = "1";
    navbar.style.transition = "200ms";
    body.style.overflowY = "scroll";
};
