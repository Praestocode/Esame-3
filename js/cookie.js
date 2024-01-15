document.addEventListener('DOMContentLoaded', function () {
    const cookieBar = document.getElementById('cookie-bar');
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');

    acceptBtn.addEventListener('click', function () {
        document.cookie = "cookie_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

        //Nasconde la barra dei cookie dopo l'accettazione
        cookieBar.style.display = 'none';
    });

    rejectBtn.addEventListener('click', function () {
        //Aggiunge qui eventuali azioni da eseguire in caso di rifiuto dei cookie

        //Nasconde la barra dei cookie dopo il rifiuto
        cookieBar.style.display = 'none';
    });

    //Mostra la barra dei cookie solo se il cookie di accettazione non è presente
    if (document.cookie.indexOf('cookie_accepted=true') === -1) {
        cookieBar.style.display = 'block';
    }
});

