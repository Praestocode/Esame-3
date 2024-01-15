const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Invio modulo di registrazione');
    const formData = new FormData(registrationForm);

    fetch('../backend/registrazione.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(response.status === 200) {
          //Se l'utente è registrato con successo
          window.location.href = '../benvenuto.html'; 
        }
        else if(response.status === 409) {
          //Se l'utente è già presente nel database
          window.location.href = '../accedi.html';
        }
        else {
          showError('Errore durante la registrazione'); 
        }
      })
      
    .catch(error => {
        console.error('Errore:', error);
    });
    modal.style.display = 'none';
});

