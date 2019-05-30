let modalButton = document.querySelector('#modal-button');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('.modal-overlay')

//Toggle
 modalButton.addEventListener('click', () => {
        if (modalButton.innerHTML === 'Open Modal'){
            modal.classList.add('active');
            overlay.classList.add('active');
            modalButton.innerHTML = 'Close Modal'
            } else {
            modal.classList.remove('active');
            overlay.classList.remove('active');
            modalButton.innerHTML = 'Open Modal'
                }
        });


//Close modal
const modalCloseButton = document.querySelector('.modal-close-button');

modalCloseButton.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    modalButton.innerHTML = 'Open Modal'

};

//Close modal on backdrop
overlay.addEventListener('click', (e) => {
    closeModal();
    modalButton.innerHTML = 'Open Modal'
})