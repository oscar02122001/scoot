const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav--header");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    if (!nav.classList.contains("active")) {
        nav.classList.add("active");
    } else if (!nav.classList.contains("closed")) {
        nav.classList.add("closed");
    }
})

nav.addEventListener("animationend", function (evt) {
    if (evt.animationName === "closed") {
        nav.classList.remove("active");
        nav.classList.remove("closed")
    }
})


const faqs__qst = document.querySelector(".faqs__qst");
const faqs__disc = document.querySelector(".faqs__desc");


faqs__qst.addEventListener("click", () => {
    faqs__qst.classList.toggle("opened");
    faqs__disc.classList.toggle("opened");
})