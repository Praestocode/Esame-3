<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["success" => false, "error" => "Utente non autenticato"]);
    exit;
}

$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_1";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => "Connessione al database fallita: " . $conn->connect_error]);
    exit;
}

$user_id = $_SESSION['user_id'];

$query = "SELECT * FROM utenti WHERE id = $user_id";
$result = $conn->query($query);

if ($result) {
    $user_data = $result->fetch_assoc();
    echo json_encode(["success" => true, "data" => $user_data]);
} else {
    echo json_encode(["success" => false, "error" => "Errore nella query: " . $conn->error]);
}

$conn->close();
?>
