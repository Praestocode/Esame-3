<?php
//Connessione al database
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_2";

$conn = new mysqli($servername, $username, $password, $dbname);

//Verifica della connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    //Recupero il titolo dalla richiesta GET
    $titolo = $_GET['titolo'];

    //Query per la tabella "lavori_in_corso"
    $sql_lavori_in_corso = "SELECT * FROM lavori_in_corso WHERE titolo='$titolo'";
    $result_lavori_in_corso = $conn->query($sql_lavori_in_corso);

    //Query per la tabella "progetti_conclusi"
    $sql_progetti_conclusi = "SELECT * FROM progetti_conclusi WHERE titolo='$titolo'";
    $result_progetti_conclusi = $conn->query($sql_progetti_conclusi);

    if ($result_lavori_in_corso->num_rows > 0) {
        $row = $result_lavori_in_corso->fetch_assoc();
        echo json_encode($row);
    } elseif ($result_progetti_conclusi->num_rows > 0) {
        $row = $result_progetti_conclusi->fetch_assoc();
        echo json_encode($row);
    } else {
        echo "Lavoro non trovato";
    }
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Recupero i dati dal POST
    $titolo = $_POST['titolo'];
    $immagine = $_POST['immagine'];
    $descrizione = $_POST['descrizione'];

    //Aggiorno il lavoro nella tabella "lavori_in_corso"
    $sql_lavori_in_corso = "UPDATE lavori_in_corso SET immagine='$immagine', descrizione='$descrizione' WHERE titolo='$titolo'";
    $conn->query($sql_lavori_in_corso);

    //Aggiorno il lavoro nella tabella "progetti_conclusi"
    $sql_progetti_conclusi = "UPDATE progetti_conclusi SET immagine='$immagine', descrizione='$descrizione' WHERE titolo='$titolo'";
    $conn->query($sql_progetti_conclusi);

    echo "Lavoro modificato con successo!";
}

$conn->close();
?>
