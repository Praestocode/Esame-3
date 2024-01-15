<?php
// Connessione al database
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_1";

$conn = new mysqli($servername, $username, $password, $dbname);

//Verifica la connessione
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

//Eseguo la query per ottenere i dati degli utenti
$query = "SELECT * FROM utenti";
$result = $conn->query($query);

//Creo un array per memorizzare i dati degli utenti
$utenti = array();

//Estraggo i dati dalla query e li aggiungo all'array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $utenti[] = array(
            'id' => $row['id'],
            'nome' => $row['nome'],
            'cognome' => $row['cognome'],
            'email' => $row['email'],
            'attivita' => $row['attivita'],
            'settore' => $row['settore'],
            'pubblico' => $row['pubblico'],
            'utilizzo_logo' => $row['utilizzo_logo'],
            'stile_preferito' => $row['stile_preferito'],
            'interesse' => $row['interesse']
        );
    }
}

$conn->close();

//Restituisco i dati in formato JSON
header('Content-Type: application/json');
echo json_encode($utenti);
?>
