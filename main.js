const modalButton = document.querySelector('#modal-button');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('.modal-overlay')

//Open modal
modalButton.addEventListener('click', (e) => {
    modal.classList.add('active');
    overlay.classList.add('active');
    modalButton.innerHTML = 'Close Modal';
    // if (modalButton.innerHTML === 'Close Modal') {
    //     modal.classList.remove('active');
    //   overlay.classList.remove('active');
    // } else {
        
    // }

})

//Close modal
const modalCloseButton = document.querySelector('.modal-close-button');

modalCloseButton.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
};

//Close modal on backdrop
overlay.addEventListener('click', (e) => {
    closeModal();
})