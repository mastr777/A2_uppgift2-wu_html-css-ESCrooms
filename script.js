// mobile Nav menu

const hamButton = document.querySelector('#hamButton');
const mobDiv = document.querySelector('.mobileFirstNav');
const mobileNavClose = document.querySelector('#mobileNavClose');
/* const width = 300;
const maxWidth = 700; */



if (window.innerWidth < 700) {

hamButton.addEventListener('click', hamToggle);
function hamToggle() {

    if (mobDiv.style.display === 'block' && hamButton) {

        mobDiv.style.display = 'none';
    }
    else {

        mobDiv.style.display = 'block';
    }
}
}
else {
    mobDiv.style.display = 'block';
}


if (window.innerWidth <= 700) {

mobileNavClose.addEventListener('click', menyClose);
function menyClose() {

    mobDiv.style.display = 'none'; 
    window.location.reload();
}
}