const loadingScreen = document.querySelector(
    "body:not(.loading-page) .splash-section"
);
const logos = document.querySelectorAll(".logo");

let isFirstLoad = JSON.parse(sessionStorage.getItem("jokerProject"));

if ((isFirstLoad === null || isFirstLoad === true) && loadingScreen) {
    loadingScreen.style.display = "flex";
    setTimeout(() => {
        loadingScreen.style.transform = "translateY(-100%)";
        isFirstLoad = false;
        sessionStorage.setItem("jokerProject", JSON.stringify(isFirstLoad));
    }, 10);
}

logos.forEach((logo) => {
    logo.addEventListener("click", () => {
        sessionStorage.setItem("jokerProject", JSON.stringify(!isFirstLoad));
    });
});
