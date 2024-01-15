<?php
//Connessione al database
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_2";

$conn = new mysqli($servername, $username, $password, $dbname);

//Verifica connessione
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

//Recupera dati dalla richiesta POST
$tipoLavoro = $_POST['tipoLavoro'];
$idLavoro = $_POST['lavoroId'];

//Query per eliminare il lavoro dal database
$sql = "DELETE FROM $tipoLavoro WHERE id = $idLavoro";

if ($conn->query($sql) === TRUE) {
    echo "Lavoro eliminato con successo";
} else {
    echo "Errore nell'eliminazione del lavoro: " . $conn->error;
}

$conn->close();
?>
