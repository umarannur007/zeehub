const navOpen = document.querySelector(".navigation-toggle");
const navWrapper = document.querySelector(".navigation-sm");
const navClose = document.querySelector(".navigation-sm__close");
const navOverlay = document.querySelector(".navigation-sm__overlay");

navOpen.addEventListener("click", () => {
    navWrapper.classList.add("show-nav");
    navOverlay.classList.add("show-overlay");
});

navClose.addEventListener("click", () => {
    navWrapper.classList.remove("show-nav");
    navOverlay.classList.remove("show-overlay");
});

navOverlay.addEventListener("click", () => {
    navWrapper.classList.remove("show-nav");
    navOverlay.classList.remove("show-overlay");
})