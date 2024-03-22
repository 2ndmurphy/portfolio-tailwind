// Hamburger
const ham = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const toTop = document.getElementById('top')
const darkToggle = document.querySelector('#darkToggle')
const html = document.querySelector('html')

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
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('nav-blur')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
    document.querySelector('html').style.scrollBehavior = 'smooth';
}

// klik di luar hamburger
window.addEventListener('click', (e) => {
    if (e.targer != menu && e.target != ham && e.target != darkToggle) {
        ham.classList.remove('hamburger-active')
        menu.classList.add('hidden')
    }
})

// Dark mode

darkToggle.addEventListener('click', () => {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

// posisi toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
  } else {
    darkToggle.checked = false
  }
