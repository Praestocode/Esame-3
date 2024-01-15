
//Funzione per la ricerca di un lavoro
function cercaLavoro() {
    var titolo = document.getElementById('ricercaTitolo').value;

    //Effettua una richiesta HTTP per ottenere i dati del lavoro dal server
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Popola il form con i dati ottenuti dal server
            var lavoro = JSON.parse(this.responseText);
            popolaForm(lavoro);
        }
    };
    xhr.open('GET', '../backend/modifica_lavoro.php?titolo=' + titolo, true);
    xhr.send();
}


//Funzione per popolare il form con i dati del lavoro
function popolaForm(lavoro) {
    document.getElementById('modificaTitolo').value = lavoro.titolo;
    document.getElementById('modificaImmagine').value = lavoro.immagine;
    document.getElementById('modificaDescrizione').value = lavoro.descrizione;
}


//Funzione per la modifica di un lavoro
document.getElementById('modificaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var titolo = document.getElementById('modificaTitolo').value;
    var immagine = document.getElementById('modificaImmagine').value;
    var descrizione = document.getElementById('modificaDescrizione').value;

    //Effettua una richiesta HTTP per aggiornare i dati del lavoro nel server
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Lavoro modificato con successo!");
        }
    };
    xhr.open('POST', '../backend/modifica_lavoro.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('titolo=' + titolo + '&immagine=' + immagine + '&descrizione=' + descrizione);
});

