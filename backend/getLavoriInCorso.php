<?php
//Connessione al database
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_2";

$conn = new mysqli($servername, $username, $password, $dbname);

//Verifica della connessione
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

//Query per ottenere i dati da 'lavori_in_corso'
$sql = "SELECT * FROM lavori_in_corso";
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

