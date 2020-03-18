const sidePanel = document.querySelector('.side-panel__wrapper');
const sideOpen = document.querySelectorAll('.side-panel__open');
const sideClose = document.querySelector('.side-panel__close-btn');

const searchIcon = document.querySelector(".search-icon");
const search = document.querySelector(".search");
const searchClose = document.querySelector(".search-close");

const filterName = document.querySelectorAll(".toggle-block__name");

const menuBurger = document.querySelector(".menu-burger");
console.log(menuBurger)

// sideOpen.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log('toggle');
//         sidePanel.classList.toggle("type--visible")
//     })
// });
//
// sideClose?.addEventListener('click', () => {
//     console.log('toggle');
//     sidePanel.classList.toggle("type--visible")
// });
//
// searchIcon.addEventListener("click", () => {
//     console.log('search');
//     search.classList.add("type--visible");
//     setTimeout(() => {
//         search.querySelector("input").focus()
//     }, 100)
// });
//
// searchClose.addEventListener("click", () => {
//     console.log('search close');
//     search.classList.remove("type--visible");
//     search.querySelector("input").value = ""
// });
//
//
// filterName.forEach(item => {
//     item.addEventListener('click', () => {
//         item.classList.toggle("type--active")
//         item.nextSibling.classList.toggle("type--visible")
//     })
// });

menuBurger.addEventListener('click', () => {
    console.log('b')
    document.querySelector(".header").classList.toggle("type--active")
    document.documentElement.classList.toggle("type--active")
});
