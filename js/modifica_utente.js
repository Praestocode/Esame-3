function searchUser() {
    var searchInput = document.getElementById('searchInput').value;

    if (searchInput !== "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('resultTable').innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "modifica_utente.php?query=" + searchInput, true);
        xhttp.send();
    } else {
        alert("Inserisci ID o Email per la ricerca.");
    }
}

function editUser(userId, currentName, currentSurname, currentEmail, currentAttivita, currentSettore, currentPubblico, currentUtilizzoLogo, currentStilePreferito, currentInteresse) {
    document.getElementById('newEmail').value = currentEmail;
    document.getElementById('newAttivita').value = currentAttivita;
    document.getElementById('newSettore').value = currentSettore;
    document.getElementById('newPubblico').value = currentPubblico;
    document.getElementById('newUtilizzoLogo').value = currentUtilizzoLogo;
    document.getElementById('newStilePreferito').value = currentStilePreferito;
    document.getElementById('newInteresse').value = currentInteresse;

    //Aggiunge i dati dell'utente corrente come attributi del form per usarli nella funzione di modifica
    document.getElementById('modifyUserForm').setAttribute('data-userid', userId);
    document.getElementById('modifyUserForm').setAttribute('data-currentName', currentName);
    document.getElementById('modifyUserForm').setAttribute('data-currentSurname', currentSurname);

    //Mostra il form di modifica
    document.getElementById('editForm').style.display = 'block';
}

function modifyUser() {
    var userId = document.getElementById('modifyUserForm').getAttribute('data-userid');
    var newName = document.getElementById('modifyUserForm').getAttribute('data-currentName');
    var newSurname = document.getElementById('modifyUserForm').getAttribute('data-currentSurname');
    var newEmail = document.getElementById('newEmail').value;
    var newAttivita = document.getElementById('newAttivita').value;
    var newSettore = document.getElementById('newSettore').value;
    var newPubblico = document.getElementById('newPubblico').value;
    var newUtilizzoLogo = document.getElementById('newUtilizzoLogo').value;
    var newStilePreferito = document.getElementById('newStilePreferito').value;
    var newInteresse = document.getElementById('newInteresse').value;

    //Esegue la richiesta AJAX per la modifica dell'utente con i nuovi dati
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Dati utente modificati con successo!");
            searchUser();
            //Nasconde il form di modifica dopo la modifica
            document.getElementById('editForm').style.display = 'none';
        }
    };
    xhttp.open("GET", "../backend/modifica_utente.php?id=" + userId + "&name=" + newName + "&surname=" + newSurname + "&email=" + newEmail + "&attivita=" + newAttivita + "&settore=" + newSettore + "&pubblico=" + newPubblico + "&utilizzo_logo=" + newUtilizzoLogo + "&stile_preferito=" + newStilePreferito + "&interesse=" + newInteresse, true);
    xhttp.send();

    return false;
}

