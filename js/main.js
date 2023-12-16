const goToTopBtn = document.querySelector(".to-top")
const menuHandle = document.querySelector(".responsive-menu__handle")
const menu = document.querySelector(".responsive-menu")

const goTop = () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

const toggleMenu = () => {
    menu.classList.toggle("open")
}

window.onscroll = () => {
    if (scrollY > 500) {
        goToTopBtn.classList.add("to-top_visible")
    } else {
        goToTopBtn.classList.remove("to-top_visible")
    }
}

goToTopBtn.addEventListener("click", () => {
    goTop()
})

menuHandle.addEventListener('click', () => {
    toggleMenu()
})
