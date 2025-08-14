const navBtn = document.querySelector(".header_menu-btn")
const navBtnMenu = document.querySelector(".header_menu")
let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navBtnMenu.classList.remove("nav__btn-menu--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navBtnMenu.classList.add("nav__btn-menu--open")

        navOpen = true
    }
})
