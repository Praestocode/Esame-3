<?php
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_3";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

//Query per selezionare tutti i messaggi
$sql = "SELECT * FROM messaggi";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    //Creazione di un array per contenere i dati
    $messaggi = array();

    while($row = $result->fetch_assoc()) {
        $messaggi[] = $row;
    }

    //Restituisco la risposta JSON
    header('Content-Type: application/json');
    echo json_encode($messaggi);
} else {
    echo "Nessun messaggio trovato.";
}

$conn->close();
?>
