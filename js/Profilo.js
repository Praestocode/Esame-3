var contenutoIniziale;

document.addEventListener('DOMContentLoaded', function () {
    var prodottiLink = document.querySelector('#vociProfile p:nth-child(1)');
    prodottiLink.addEventListener('click', mostraProdotti);

    var contattiLink = document.querySelector('#vociProfile p:nth-child(2)');
    contattiLink.addEventListener('click', mostraContatti);

    //Memorizza il contenuto iniziale di selectedContent
    contenutoIniziale = document.getElementById('selectedContent').innerHTML;

    //Esegue questa funzione all'inizio per mostrare i prodotti di default
    mostraProdotti();
});

function mostraProdotti() {
    //Ripristina il contenuto iniziale di selectedContent (quello di default)
    document.getElementById('selectedContent').innerHTML = contenutoIniziale;

    //Aggiunge le informazioni di prodotti a selectedContent
    var selectedContent = document.getElementById('selectedContent');

    var prodotti = [
        { titolo: 'Starter', descrizione: 'Giusto per iniziare' },
        { titolo: 'Pro', descrizione: 'Per un cliente più esigente' },
        { titolo: 'Executive', descrizione: 'Per chi vuole tutto, all inclusive' }
    ];

    for (var i = 0; i < prodotti.length; i++) {
        var cardHTML = '<a href="./prodotti.html"><div class="card">' +
            '<h2>' + prodotti[i].titolo + '</h2>' +
            '<p>' + prodotti[i].descrizione + '</p>' +
            '</div>';

        selectedContent.innerHTML += cardHTML;
    }

    //Aggiunge la classe 'active' al link del menu "Prodotti"
    aggiungiClasseActive(document.querySelector('#vociProfile p:nth-child(1)'));
}

function mostraContatti() {
    //Ripristina il contenuto iniziale di selectedContent
    document.getElementById('selectedContent').innerHTML = contenutoIniziale;

    //Aggiunge le informazioni di contatto a selectedContent
    var selectedContent = document.getElementById('selectedContent');

    var contattiHTML = '<div id="contacts">' +
        '<div class="card">' +
        '<h2>Email</h2>' +
        '<p>E-mail: makeitpraesto@gmail.com</p>' +
        '<p>E-mail: makeitpraesto@ufftec.com</p>' +
        '</div>' +
        '<div class="card">' +
        '<h2>Telefono</h2>' +
        '<p>Whatsapp: +41 767308444</p>' +
        '<p>Reperibile h/24</p>' +
        '</div>' +
        '</div>';

    selectedContent.innerHTML = contattiHTML;

    //Aggiunge la classe 'active' al link del menu "Contatti"
    aggiungiClasseActive(document.querySelector('#vociProfile p:nth-child(2)'));
}

//Funzione per rimuovere la classe 'active' dagli altri link del menu
function rimuoviClasseActive() {
    var menuLinks = document.querySelectorAll('#vociProfile p');
    menuLinks.forEach(function (link) {
        link.classList.remove('active');
    });
}

//Funzione per aggiungere la classe 'active' al link del menu cliccato
function aggiungiClasseActive(elemento) {
    rimuoviClasseActive();
    elemento.classList.add('active');
}

