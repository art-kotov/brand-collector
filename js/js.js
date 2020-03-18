const sidePanel = document.querySelector('.side-panel__wrapper');
const sideOpen = document.querySelectorAll('.side-panel__open');
const sideClose = document.querySelector('.side-panel__close-btn');

const searchIcon = document.querySelector(".search-icon");
const search = document.querySelector(".search");
const searchClose = document.querySelector(".search-close");

const filterName = document.querySelectorAll(".filter__name");


sideOpen.forEach(item => {
    item.addEventListener('click', () => {
        console.log('toggle');
        sidePanel.classList.toggle("type--visible")
    })
});

sideClose.addEventListener('click', () => {
    console.log('toggle');
    sidePanel.classList.toggle("type--visible")
});

searchIcon.addEventListener("click", () => {
    console.log('search');
    search.classList.add("type--visible");
    search.querySelector("input").focus()
});

searchClose.addEventListener("click", () => {
    console.log('search close');
    search.classList.remove("type--visible");
    search.querySelector("input").value = ""
});


filterName.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle("type--active")
        item.nextSibling.classList.toggle("type--visible")
    })
});
