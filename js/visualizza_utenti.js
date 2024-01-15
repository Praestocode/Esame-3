document.addEventListener("DOMContentLoaded", function () {
    //Effettua una richiesta AJAX per ottenere i dati dal file PHP
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "visualizza_utenti.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var utenti = JSON.parse(xhr.responseText);

            //Ottiengo la tabella dal DOM
            var tabella = document.querySelector("#Lista table tbody");

            //Popolo la tabella con i dati degli utenti
            utenti.forEach(function (utente) {
                var riga = document.createElement("tr");

                //Popolo le celle della riga con i dati dell'utente
                riga.innerHTML = `
                    <td>${utente.id}</td>
                    <td>${utente.nome}</td>
                    <td>${utente.cognome}</td>
                    <td>${utente.email}</td>
                    <td>${utente.attivita}</td>
                    <td>${utente.settore}</td>
                    <td>${utente.pubblico}</td>
                    <td>${utente.utilizzo_logo}</td>
                    <td>${utente.stile_preferito}</td>
                    <td>${utente.interesse}</td>
                    <td><button class="elimina-btn" data-id="${utente.id}">Elimina</button></td>
                `;

                tabella.appendChild(riga);
            });

            //Aggiunge un event listener per gestire il clic sul pulsante "Elimina"
            var eliminaButtons = document.querySelectorAll(".elimina-btn");
            eliminaButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    var userId = button.getAttribute("data-id");
                    eliminaUtente(userId);
                });
            });
        }
    };
    xhr.send();

    //Funzione per eliminare un utente
    function eliminaUtente(userId) {
        var confermaEliminazione = confirm("Sei sicuro di voler eliminare questo utente?");
        if (confermaEliminazione) {
            var xhrElimina = new XMLHttpRequest();
            xhrElimina.open("POST", "../backend/elimina_utente.php", true);
            xhrElimina.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhrElimina.onreadystatechange = function () {
                if (xhrElimina.readyState == 4 && xhrElimina.status == 200) {
                    //Aggiorna la tabella dopo l'eliminazione
                    console.log("Utente eliminato con successo");
                }
            };
            xhrElimina.send("userId=" + encodeURIComponent(userId));
        }
    }
});

