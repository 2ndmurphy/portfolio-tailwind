// Hamburger
const ham = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')

ham.addEventListener('click', () => {
    ham.classList.toggle('hamburger-active')
    menu.classList.toggle('hidden')
})

// navbar fixed
window.onscroll = function() {scrollFunc()}

function scrollFunc() {
    const header = document.querySelector('header')
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('nav-blur')
    } else {
        header.classList.remove('nav-blur')
    }
    document.querySelector('html').style.scrollBehavior = 'smooth';
}