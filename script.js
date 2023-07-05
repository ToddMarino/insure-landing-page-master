const navToggleButton = document.querySelector('.icon__toggle');
const navLinks = document.querySelector('.nav__links');
let menuOpen = false

navToggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('nav__open');
    if (menuOpen === true) {
        navToggleButton.classList.remove('icon_closed')
        menuOpen = false
        console.log(menuOpen)
    } else {
        navToggleButton.classList.add('icon_closed')
        menuOpen = true
        console.log(menuOpen)
    }
});
