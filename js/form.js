document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch(this.action, {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        var confermaMessaggio = document.getElementById("confermaMessaggio");
        confermaMessaggio.innerText = data.message;
    })
    .catch(error => {
        console.error("Errore durante l'invio del modulo:", error);
    });
});
