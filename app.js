const data = document.getElementById("data");
data.innerHTML = new Date().getFullYear();



const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// fixed navbar
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
})
