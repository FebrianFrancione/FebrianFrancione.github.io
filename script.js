// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



// Changing Images to locked
    function hover(element) {
        element.setAttribute('src', 'img/54.jpg');
    }
  
  function unhover(element) {
    element.setAttribute('src', 'img/53.jpg');
  }



//   Modal
document.getElementById('famous-button').addEventListener("click", function() {
	document.querySelector('#famous-section .bg-modal').style.display = "flex";
});

document.getElementById('famous-button2').addEventListener("click", function() {
	document.querySelector('#famous-section .modal-2').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
    // document.querySelector('.bg-modal .modal-2').style.display = "none";
});

document.querySelector('.close-2').addEventListener("click", function() {
	document.querySelector('.modal-2').style.display = "none";
    // document.querySelector('.bg-modal .modal-2').style.display = "none";
});
