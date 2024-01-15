//Funzione per popolare il container con i dati
function popolaProgetti(containerId, data) {
    var container = document.getElementById(containerId);
    var tipoLavoro = container.getAttribute("data-tipo");

    //Creazione di una tabella
    var table = document.createElement("table");

    //Intestazione della tabella
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Titolo</th><th>Immagine</th><th>Descrizione</th><th>Azioni</th>";
    thead.appendChild(headerRow);
    table.appendChild(thead);

    //Corpo della tabella
    var tbody = document.createElement("tbody");

    data.forEach(function (progetto) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + progetto.titolo + "</td>" +
                        "<td>" + progetto.immagine + "</td>" +
                        "<td>" + progetto.descrizione + "</td>" +
                        "<td><button onclick=\"eliminaLavoro('" + tipoLavoro + "', '" + progetto.id + "')\">Elimina</button></td>";
        tbody.appendChild(row);
    });

    //Aggiunta del corpo alla tabella
    table.appendChild(tbody);

    //Sostituisce la tabella esistente con la nuova
    container.innerHTML = "";
    container.appendChild(table);
}

//Funzione per effettuare richieste AJAX per eliminare un lavoro
function eliminaLavoro(tipoLavoro, lavoroId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //Aggiorna la visualizzazione dei lavori dopo l'eliminazione
            if (tipoLavoro === "lavori_in_corso") {
                caricaLavoriInCorso();
            } else if (tipoLavoro === "progetti_conclusi") {
                caricaProgettiConclusi();
            }
        }
    };

    xhr.open("POST", "../backend/elimina_lavoro.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("tipoLavoro=" + encodeURIComponent(tipoLavoro) +
             "&lavoroId=" + encodeURIComponent(lavoroId));
}



//Funzione per effettuare richieste AJAX per l'inserimento di un nuovo lavoro
function inserisciLavoro(event) {
    event.preventDefault();

    var tipoLavoro = document.getElementById("tipoLavoro").value;
    var titolo = document.getElementById("titolo").value;
    var immagine = document.getElementById("immagine").value;
    var descrizione = document.getElementById("descrizione").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //Aggiorna la visualizzazione dei lavori dopo l'inserimento
            if (tipoLavoro === "lavori_in_corso") {
                caricaLavoriInCorso();
            } else if (tipoLavoro === "progetti_conclusi") {
                caricaProgettiConclusi();
            }

            //"Pulisce" il form
            document.getElementById("inserisciForm").reset();
        }
    };

    xhr.open("POST", "../backend/inserisci_lavoro.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("tipoLavoro=" + encodeURIComponent(tipoLavoro) +
             "&titolo=" + encodeURIComponent(titolo) +
             "&immagine=" + encodeURIComponent(immagine) +
             "&descrizione=" + encodeURIComponent(descrizione));
}

document.getElementById("inserisciForm").addEventListener("submit", inserisciLavoro);
