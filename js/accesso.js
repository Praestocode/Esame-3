const accessoForm = document.getElementById('accessoForm');
const passwordError = document.getElementById('passwordError');

accessoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //Recupera i dati dal form
    const formData = new FormData(accessoForm);

    //Effettua la richiesta POST al file accesso.php
    fetch('../backend/accesso.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        //Logica di gestione della risposta
        console.log(data);
    
        if (data.success) {
            //Condizione 1: EMAIL ESATTA & PASSWORD ESATTA
            console.log('Accesso riuscito');
            window.location.href = '../paginaUtente.html';
        } else {
            //Condizione 2: EMAIL ESATTA & PASSWORD INESATTA
            if (data.message === 'Credenziali non valide') {
                console.log('Password errata, mostra messaggio di errore');
                document.getElementById('passwordError').innerText = 'Password errata';
            } else {
                //Condizione 3: EMAIL INESATTA E PASSWORD INESATTA
                console.log('Credenziali non valide, reindirizzamento a registrati.html');
                window.location.href = '../registrati.html';
            }
        }
    })
    .catch(error => {
        //Logica di gestione degli errori
        console.error(error);
    });
});

