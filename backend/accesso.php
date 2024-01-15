<?php
session_start();

$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_1";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connessione al database fallita: ' . $conn->connect_error]));
}

$email = $conn->real_escape_string($_POST['email']);
$password = $conn->real_escape_string($_POST['password']);

$query = $conn->prepare("SELECT id, password FROM utenti WHERE email = ?");
$query->bind_param("s", $email);
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $user_id = $row['id'];
    $stored_password = $row['password'];

    if (password_verify($password, $stored_password)) {
        $_SESSION['user_id'] = $user_id;
        echo json_encode(['success' => true, 'redirect' => '../paginaUtente.html']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Credenziali non valide']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Utente non registrato']);
}

$conn->close();
?>
