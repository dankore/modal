let modalButton = document.querySelector('#modal-button');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('.modal-overlay')

//Toggle - 1st 
//  modalButton.addEventListener('click', () => {
//         if (modalButton.innerHTML === 'Open Modal'){
//             modal.classList.add('active');
//             overlay.classList.add('active');
//             modalButton.innerHTML = 'Close Modal'
//             } else {
//             modal.classList.remove('active');
//             overlay.classList.remove('active');
//             modalButton.innerHTML = 'Open Modal'
//                 }
//         });

modalButton.addEventListener('click', () => {
        if (modal.classList.contains('active')){
              modal.classList.remove('active');
            overlay.classList.remove('active');
            modalButton.innerHTML = 'Open Modal'
            } else {
            modal.classList.add('active');
            overlay.classList.add('active');
            modalButton.innerHTML = 'Close Modal'
                }
        });

//Close modal - 2nd
const modalCloseButton = document.querySelector('.modal-close-button');

modalCloseButton.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    modalButton.innerHTML = 'Open Modal'

};

//Close modal on backdrop - 3rd
overlay.addEventListener('click', (e) => {
    closeModal();
    modalButton.innerHTML = 'Open Modal'
})