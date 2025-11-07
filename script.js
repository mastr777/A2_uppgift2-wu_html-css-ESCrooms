// mobile Nav menu

const hamButton = document.querySelector('#hamButton');
const mobDiv = document.querySelector('.mobileFirstNav');
const mobDivIn = document.querySelector('.mobileFirstNavIn');
const mobileNavClose = document.querySelector('#mobileNavClose');

let width = window.innerWidth;

function breakpointMobileMenu() {

    if (width >= 700) {
        mobDiv.classList.add('open');
        mobDivIn.classList.add('open');
    } else {
        mobDiv.classList.remove('open');
        mobDivIn.classList.remove('open');
    }
}

breakpointMobileMenu();

// open mobile menu elements
hamButton.addEventListener('click', openMenu);

function openMenu() {
    mobDiv.classList.toggle('open');
    mobDivIn.classList.toggle('open');
}


// close open mobile menu elements
mobileNavClose.addEventListener('click', removeOpenMenu);

function removeOpenMenu() {
    mobDiv.classList.remove('open');
    mobDivIn.classList.remove('open');
}

window.addEventListener('resize', screenSize);

function screenSize() {
    width = window.innerWidth;
    breakpointMobileMenu();
}


