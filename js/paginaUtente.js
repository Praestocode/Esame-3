document.addEventListener('DOMContentLoaded', function () {
    fetch('../backend/recupera_dati_utente.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const user_data = data.data;
                document.getElementById('user-name').textContent = user_data.nome;
                document.getElementById('user-attivita').textContent = user_data.attivita;
                document.getElementById('user-pubblico').textContent = user_data.pubblico;
                document.getElementById('user-settore').textContent = user_data.settore;
            } else {
                console.error(data.error);
            }
        })
        .catch(error => console.error(error));
});

