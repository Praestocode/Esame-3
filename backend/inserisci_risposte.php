<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $servername = "89.46.111.99";
    $username = "Sql1759572";
    $password = "Virgiliopraesto1010972277@";
    $dbname = "Sql1759572_1";

    $connessione = new mysqli($servername, $username, $password, $dbname);

    if ($connessione->connect_error) {
        die("Connessione al database fallita: " . $connessione->connect_error);
    }

    //Recupero dell'ID utente dal cookie di sessione
    $user_id = isset($_COOKIE['user_id']) ? $connessione->real_escape_string($_COOKIE['user_id']) : null;

    //Verifico se l'ID utente è stato fornito correttamente
    if ($user_id === null) {
        echo json_encode(["success" => false, "error" => "ID utente non fornito correttamente"]);
        $connessione->close();
        exit;
    }

    $risposte = json_decode(file_get_contents("php://input"), true);

    $query = "UPDATE utenti SET 
        attivita = '" . implode(",", $risposte['domanda1']) . "', 
        settore = '" . $risposte['domanda2'] . "', 
        pubblico = '" . implode(",", $risposte['domanda3']) . "', 
        utilizzo_logo = '" . implode(",", $risposte['domanda4']) . "', 
        stile_preferito = '" . implode(",", $risposte['domanda5']) . "', 
        interesse = '" . implode(",", $risposte['domanda6']) . "' 
        WHERE id = $user_id";

    if ($connessione->query($query) === TRUE) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => $connessione->error]);
    }

    $connessione->close();
} else {
    echo json_encode(["success" => false, "error" => "Metodo non consentito"]);
}
?>

