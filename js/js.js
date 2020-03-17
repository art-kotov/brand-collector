const sidePanel = document.querySelector('.side-panel__wrapper');
const sideOpen = document.querySelectorAll('.side-panel__open');
const sideClose = document.querySelector('.side-panel__close-btn');

const searchIcon = document.querySelector(".search-icon");
const search = document.querySelector(".header__search");

sideOpen.forEach(item => {
    item.addEventListener('click', () => {
        console.log('toggle')
        sidePanel.classList.toggle("type--visible")
    })
});

sideClose.addEventListener('click', () => {
    console.log('toggle')
    sidePanel.classList.toggle("type--visible")
});

searchIcon.addEventListener("click", () => {
    console.log('search')
    search.classList.add("type--visible")
})
