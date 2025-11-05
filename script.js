// mobile Nav menu

const hamButton = document.querySelector('#hamButton');
const mobDiv = document.querySelector('.mobileFirstNav');
const mobDivIn = document.querySelector('.mobileFirstNavIn');
const mobileNavClose = document.querySelector('#mobileNavClose');
/* const width = 300;
const maxWidth = 700; */
const width = window.innerWidth;


if (width < 700) {

hamButton.addEventListener('click', hamToggle);
function hamToggle() {
    
    if (mobDiv.style.display === 'block' && mobDivIn.style.display === 'none' && hamButton) {

        mobDiv.style.display = 'none';

    }
    else {

        mobDiv.style.display = 'block';
        mobDivIn.style.display = 'block';
    }
}
}
else {
    mobDiv.style.display = 'block';
    mobDivIn.style.display = 'block';
}


if (width <= 700) {

mobileNavClose.addEventListener('click', menuClose);
function menuClose() {

    mobDiv.style.display = 'none'; 
    mobDivIn.style.display = 'none';
    window.location.reload();
}
}