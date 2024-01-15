//Funzione per effettuare richieste AJAX
function caricaLavoriInCorso() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            popolaProgetti("lavoriInCorsoContainer", data);
        }
    };
    xhr.open("GET", "../backend/getLavoriInCorso.php", true);
    xhr.send();
}

//Carica i lavori in corso al caricamento della pagina
document.addEventListener("DOMContentLoaded", function () {
    caricaLavoriInCorso();
});



