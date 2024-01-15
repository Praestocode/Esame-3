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

//Query per ottenere i dati da 'progetti_conclusi'
$sql = "SELECT * FROM progetti_conclusi";
$result = $conn->query($sql);

//Restituisco i dati come JSON
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$conn->close();
?>
