<?php
//Connessione al database
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_1";

$conn = new mysqli($servername, $username, $password, $dbname);

//Verifica la connessione
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

//Ottiengo l'ID dell'utente da eliminare
$userId = $_POST['userId'];

//Eseguo la query per eliminare l'utente
$queryElimina = "DELETE FROM utenti WHERE id = $userId";
$resultElimina = $conn->query($queryElimina);

//Chiudo la connessione al database
$conn->close();

//Restituisco la conferma di eliminazione
header('Content-Type: application/json');
echo json_encode(array('success' => $resultElimina));
?>
