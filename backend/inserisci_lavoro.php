<?php
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_2";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

$tipoLavoro = $_POST["tipoLavoro"];
$titolo = $_POST["titolo"];
$immagine = $_POST["immagine"];
$descrizione = $_POST["descrizione"];

$sql = "INSERT INTO $tipoLavoro (titolo, immagine, descrizione) VALUES ('$titolo', '$immagine', '$descrizione')";

if ($conn->query($sql) === TRUE) {
    echo "Inserimento avvenuto con successo";
} else {
    echo "Errore nell'inserimento: " . $conn->error;
}

$conn->close();
?>

