const menuOpen = document.getElementById('menu-open');
const menuOpenI = document.getElementById('menu-open-i');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .sidebar')

menuOpen.addEventListener('click', () => {
    sideBar.style.left = '0';
})

menuClose.addEventListener('click', () => {
    sideBar.style.left = '-100%';
})

document.addEventListener('click', e => {
    if ((!sideBar.contains(e.target)) && (e.target !== menuOpen) && (e.target !== menuOpenI)) {
        sideBar.style.left = '-100%';
    }
})

const themeButton = $('#theme-button');

themeButton.on('click', () => {
    $('body').toggleClass('light-theme');

    themeButton.toggleClass('bxs-sun')
})