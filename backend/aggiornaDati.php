<?php
//Avvia la sessione PHP
session_start();

//Connessione al database
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_1";

$conn = new mysqli($servername, $username, $password, $dbname);

//Verifica della connessione al database
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

//Recupera il valore dalla richiesta POST
$valore = $_POST['valore'];

//Recupera l'ID dell'utente dalla sessione o dal cookie
$user_id = $_SESSION['user_id'];

//Suddivide il valore in diverse informazioni utilizzando il delimitatore
$informazioni = explode(',', $valore);

if (count($informazioni) >= 6) {
    //Assegna le informazioni alle variabili corrispondenti
    $attivita = $informazioni[0];
    $settore = $informazioni[1];
    $target = $informazioni[2];
    $utilizzo_logo = $informazioni[3];
    $stile_preferito = $informazioni[4];
    $interesse = $informazioni[5];

    //Aggiorna il database con le nuove informazioni
    $sql_update = "UPDATE utenti SET 
                   attivita='$attivita', 
                   settore='$settore', 
                   target='$target', 
                   utilizzo_logo='$utilizzo_logo', 
                   stile_preferito='$stile_preferito', 
                   interesse='$interesse' 
                   WHERE id='$user_id'";

    if ($conn->query($sql_update) === TRUE) {
        echo "Dati aggiornati con successo";
    } else {
        echo "Errore durante l'aggiornamento dei dati: " . $conn->error;
    }
} else {
    echo "Formato dati non valido";
}

$conn->close();
?>

