//your code here
 const openModalButton = document.querySelector('#open-modal');
const modal = document.querySelector('#newton-modal');

openModalButton.addEventListener('click', () => {
  modal.classList.add('show');
});
 
 const closeModalButton = document.querySelector('.modal-footer button');

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('show');
}); 

