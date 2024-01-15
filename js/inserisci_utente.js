document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formInserisciUtente").addEventListener("submit", function (event) {
        event.preventDefault();
        inviaDati();
    });

    function inviaDati() {
        var formData = new FormData(document.getElementById("formInserisciUtente"));
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    //Elabora la risposta dal server
                    console.log(xhr.responseText);
                } else {
                    console.error("Errore durante la richiesta al server");
                }
            }
        };

        xhr.open("POST", "../backend/inserisci_utente.php", true);
        xhr.send(formData);
    }
});

