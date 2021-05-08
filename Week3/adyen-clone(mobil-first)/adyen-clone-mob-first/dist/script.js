// const btnHamburger = document.querySelector('#btnHamburger');
// const body = document.querySelector('body');
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const fadeElems = document.querySelectorAll('.has-fade');


// btnHamburger.addEventListener('click', function(){

//   if(header.classList.contains('open')){
//     body.classList.remove('noscroll');
//     // header.classList.remove('open');    
//     fadeElems.forEach(function(element){
//       element.classList.remove('fade-in');
//       element.classList.add('fade-out');
//     });

//   }
//   else { // Open Hamburger Menu
//     body.classList.add('noscroll');
//     header.classList.add('open');
//     fadeElems.forEach(function(element){
//       element.classList.remove('fade-out');
//       element.classList.add('fade-in');
//     });

//   }  
// });


'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});