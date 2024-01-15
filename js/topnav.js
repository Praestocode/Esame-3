document.addEventListener('DOMContentLoaded', function () {
    console.log('Il JavaScript è stato eseguito correttamente.');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    menuToggle.addEventListener('click', function () {
        menuItems.classList.toggle('show');
        menuToggle.classList.toggle('open');
    });

    //Codice per la finestra modale
    const registerLink = document.getElementById('registerLink');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

//Visualizzazione finestra registrazione cliccando sul button "Registrati"
const registratiButton = document.querySelector('#call2Action button');
registratiButton.addEventListener('click', function () {
modal.style.display = 'block';
});

//Visualizzazione finestra registrazione cliccando su .card
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
card.addEventListener('click', function () {
    modal.style.display = 'block';
});
});




const accessoLink = document.getElementById('accessoLink');
const modalAccesso = document.getElementById('modalAccesso');
const closeBtnAccesso = document.querySelector('.close-accesso');

accessoLink.addEventListener('click', function (event) {
    event.preventDefault();
    modalAccesso.style.display = 'block';
});

closeBtnAccesso.addEventListener('click', function () {
    modalAccesso.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modalAccesso) {
        modalAccesso.style.display = 'none';
    }
});




