const sidePanel = document.querySelector('.side-panel__wrapper');
const sideOpen = document.querySelectorAll('.side-panel__open');
const sideClose = document.querySelector('.side-panel__close-btn');
console.log({
    sidePanel,
    sideOpen,
    sideClose
})

sideOpen.forEach(item => {
    item.addEventListener('click', () => {
        console.log('toggle')
        sidePanel.classList.toggle("type--visible")
    })
})

sideClose.addEventListener('click', () => {
    console.log('toggle')
    sidePanel.classList.toggle("type--visible")
})
