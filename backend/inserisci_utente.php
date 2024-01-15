<?php
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_1";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

$nome = $_POST["nome"];
$cognome = $_POST["cognome"];
$email = $_POST["email"];
$password = password_hash($_POST["password"], PASSWORD_DEFAULT);
$attivita = $_POST["Attivita"];
$settore = $_POST["Settore"];
$pubblico = $_POST["attivita"];
$utilizzoLogo = $_POST["UtilizzoLogo"];
$stilePreferito = $_POST["StilePreferito"];
$interesse = $_POST["Interesse"];

//Verifico se l'utente già esiste
$queryVerifica = "SELECT * FROM utenti WHERE email = '$email'";
$resultVerifica = $conn->query($queryVerifica);

if ($resultVerifica->num_rows > 0) {
    echo "L'utente con questa email già esiste. Inserimento non riuscito.";
} else {
    //Inserimento dell'utente nel database
    $queryInserimento = "INSERT INTO utenti (nome, cognome, email, password, attivita, settore, pubblico, utilizzo_logo, stile_preferito, interesse)
                         VALUES ('$nome', '$cognome', '$email', '$password', '$attivita', '$settore', '$pubblico', '$utilizzoLogo', '$stilePreferito', '$interesse')";

    if ($conn->query($queryInserimento) === TRUE) {
        echo "Utente inserito con successo!";
    } else {
        echo "Errore durante l'inserimento dell'utente: " . $conn->error;
    }
}

$conn->close();
?>

