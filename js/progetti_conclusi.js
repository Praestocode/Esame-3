//Funzione per effettuare richieste AJAX
function caricaProgettiConclusi() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            popolaProgetti("progettiConclusiContainer", data);
        }
    };
    xhr.open("GET", "../backend/getProgettiConclusi.php", true);
    xhr.send();
}

//Carica i progetti conclusi proprio al caricamento della pagina
document.addEventListener("DOMContentLoaded", function () {
    caricaProgettiConclusi();
});

