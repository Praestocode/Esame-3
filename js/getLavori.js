document.addEventListener("DOMContentLoaded", function () {
    //Richiesta AJAX per ottenere i dati dei lavori in corso
    var xhrLavoriInCorso = new XMLHttpRequest();
    xhrLavoriInCorso.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var lavoriInCorso = JSON.parse(this.responseText);
            popolaProgetti("corpo2", lavoriInCorso);
        }
    };
    xhrLavoriInCorso.open("GET", "./backend/getLavoriInCorso.php", true);
    xhrLavoriInCorso.send();

    //Richiesta AJAX per ottenere i dati dei progetti conclusi
    var xhrProgettiConclusi = new XMLHttpRequest();
    xhrProgettiConclusi.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var progettiConclusi = JSON.parse(this.responseText);
            popolaProgetti("corpo", progettiConclusi);
        }
    };
    xhrProgettiConclusi.open("GET", "./backend/getProgettiConclusi.php", true);
    xhrProgettiConclusi.send();
});
function popolaProgetti(containerId, data) {
    //Recupera l'elemento corrispondente nella pagina HTML
    var container = document.getElementById(containerId);

    //Popola la pagina con i dati ottenuti dal database
    data.forEach(function (progetto) {
        var projectDiv = document.createElement("div");
        projectDiv.classList.add(containerId === "corpo" ? "project" : "project2");

        var contentsDiv = document.createElement("div");
        contentsDiv.classList.add("contents");

        //Popola il div del progetto con i dati necessari
        contentsDiv.innerHTML = "<div class='titolo'>" + progetto.titolo + "</div>" +
                                "<div class='immagine'>" +
                                    "<img src='" + progetto.immagine + "' alt='" + progetto.titolo + "'>" +
                                "</div>" +
                                "<div class='descrizione'>" + progetto.descrizione + "</div>";

        //Aggiunge il div del progetto al container
        projectDiv.appendChild(contentsDiv);
        container.appendChild(projectDiv);
    });
}
