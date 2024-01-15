<?php
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_3";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

//Ricevo i dati dal modulo
$nome = $_POST["nome"];
$cognome = $_POST["cognome"];
$email = $_POST["email2"];
$messaggio = $_POST["messaggio"];

//Preparazione della query SQL
$sql = "INSERT INTO messaggi (nome, cognome, email, messaggio) VALUES (?, ?, ?, ?)";

//Preparazione dello statement
$stmt = $conn->prepare($sql);

//Associazione dei parametri
$stmt->bind_param("ssss", $nome, $cognome, $email, $messaggio);

//Esecuzione della query
if ($stmt->execute()) {
    $response = array("success" => true, "message" => "Messaggio inviato con successo!");
} else {
    $response = array("success" => false, "message" => "Errore nell'inserimento del messaggio nel database: " . $stmt->error);
}

//Chiudo lo statement
$stmt->close();

//Chiudo la connessione al database
$conn->close();

//Restituisco risposta JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
