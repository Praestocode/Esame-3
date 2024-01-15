<?php
session_start();

//Verifica se sono stati inviati dati tramite POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username_corretto = "Virgilio";
    $password_corretta = "Nonmiinteressa14";

    //Ottengo i dati inseriti dall'utente
    $input_username = $_POST['username'];
    $input_password = $_POST['password'];

    //Verifico se le credenziali inserite corrispondono a quelle corrette
    if ($input_username === $username_corretto && $input_password === $password_corretta) {
        //Se le credenziali sono corrette, imposta una variabile di sessione per segnalare il login
        $_SESSION['loggedin'] = true;
        
        //Reindirizzo l'utente alla pagina di gestione lavori dopo il login
        header("Location: gestione_generale.html");
        exit();
    } else {
        echo "Credenziali errate. Riprova.";
    }
}
?>
