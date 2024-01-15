document.addEventListener("DOMContentLoaded", function () {
    var formQuestionario = document.getElementById("formQuestionario");

    if (formQuestionario) {
        formQuestionario.addEventListener("submit", function (event) {
            event.preventDefault();

            var risposte = {
                domanda1: getCheckboxValues("Attivita"),
                domanda2: document.querySelector('select[name="settore"]').value,
                domanda3: getCheckboxValues("Pubblico"),
                domanda4: getCheckboxValues("UtilizzoLogo"),
                domanda5: getCheckboxValues("StilePreferito"),
                domanda6: getCheckboxValues("Interesse"),
            };

            inviaRisposteAlServer(risposte);
        });
    } else {
        console.error("Elemento con id 'formQuestionario' non trovato.");
    }

    function getCheckboxValues(name) {
        var checkboxes = document.querySelectorAll('input[name="' + name + '"]:checked');
        return Array.from(checkboxes).map(function (checkbox) {
            return checkbox.value;
        });
    }

    function inviaRisposteAlServer(risposte) {
        fetch('../backend/inserisci_risposte.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(risposte),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Risposte inviate con successo:', data);
        })
        .catch(error => {
            console.error('Errore durante l\'invio delle risposte:', error);
        });
    }
});

