document.addEventListener("DOMContentLoaded", function() {
    //Carica i dati dei messaggi quando la pagina è completamente caricata
    fetch('../backend/visualizza_messaggi.php')
        .then(response => response.json())
        .then(data => {
            const messaggiContainer = document.getElementById('messaggi-container');

            if (data.length > 0) {
                const table = document.createElement('table');

                const headerRow = document.createElement('tr');
                Object.keys(data[0]).forEach(key => {
                    const th = document.createElement('th');
                    th.textContent = key;
                    headerRow.appendChild(th);
                });
                table.appendChild(headerRow);

                data.forEach(row => {
                    const tr = document.createElement('tr');
                    Object.values(row).forEach(value => {
                        const td = document.createElement('td');
                        td.textContent = value;
                        tr.appendChild(td);
                    });
                    table.appendChild(tr);
                });

                messaggiContainer.appendChild(table);
            } else {
                messaggiContainer.textContent = 'Nessun messaggio trovato.';
            }
        })
        .catch(error => console.error('Errore durante il recupero dei messaggi:', error));
});
