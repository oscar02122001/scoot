const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    body.classList.toggle("freez");
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


const faqs__qst = document.querySelectorAll(".faqs__qst");
const faqs__disc = document.querySelectorAll(".faqs__disc");

function showContent() {
    faqs__qst.forEach((item, i) => {
        item.addEventListener("click", function () {
            if (!faqs__qst[i].classList.contains("opened")) {
                faqs__qst[i].classList.add("opened");
            } else if (!faqs__qst[i].classList.contains("closing")) {
                faqs__qst[i].classList.add("closing");

            }
            faqs__disc.forEach((item, i) => {
                item.addEventListener("animationend", function (evt) {
                    if (evt.animationName === "closing") {
                        faqs__qst[i].classList.remove("opened");
                        faqs__qst[i].classList.remove("closing");
                    }
                })
            })


        })

    })

}

showContent()



// faqs__qst.addEventListener("click", function () {
//     if (!faqs__qst.classList.contains("opened")) {
//         faqs__qst.classList.add("opened");
//         faqs__disc.classList.add("opened");
//     } else if (!faqs__qst.classList.contains("closing")) {
//         faqs__qst.classList.add("closing");
//         faqs__disc.classList.add("closing");
//     }


// faqs__disc.addEventListener("animationend", function (evt) {
//     if (evt.animationName === "closing") {
//         faqs__qst.classList.remove("opened");
//         faqs__disc.classList.remove("opened");
//         faqs__qst.classList.remove("closing");
//         faqs__disc.classList.remove("closing")
//     }
// })