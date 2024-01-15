<?php
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_1";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Verifico se è una richiesta di ricerca o modifica
if (isset($_GET['query'])) {
    //Ricerca utenti
    $query = $_GET['query'];

    $sql = "SELECT * FROM utenti WHERE id = '$query' OR email = '$query'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Email</th>
                    <th>Attività</th>
                    <th>Settore</th>
                    <th>Pubblico</th>
                    <th>Utilizzo Logo</th>
                    <th>Stile Preferito</th>
                    <th>Interesse</th>
                    <th>Azioni</th> <!-- Nuova colonna per i pulsanti di modifica -->
                </tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>".$row['id']."</td>
                    <td>".$row['nome']."</td>
                    <td>".$row['cognome']."</td>
                    <td>".$row['email']."</td>
                    <td>".$row['attivita']."</td>
                    <td>".$row['settore']."</td>
                    <td>".$row['pubblico']."</td>
                    <td>".$row['utilizzo_logo']."</td>
                    <td>".$row['stile_preferito']."</td>
                    <td>".$row['interesse']."</td>
                    <td><button onclick=\"editUser('".$row['id']."', '".$row['nome']."', '".$row['cognome']."', '".$row['email']."', '".$row['attivita']."', '".$row['settore']."', '".$row['pubblico']."', '".$row['utilizzo_logo']."', '".$row['stile_preferito']."', '".$row['interesse']."')\">Modifica</button></td>
                </tr>";
        }
        echo "</table>";
    } else {
        echo "Nessun utente trovato.";
    }
} elseif (isset($_GET['id']) && isset($_GET['name']) && isset($_GET['surname']) && isset($_GET['email']) && isset($_GET['attivita']) && isset($_GET['settore'])) {
    //Per modificare l'utente
    $userId = $_GET['id'];
    $newName = $_GET['name'];
    $newSurname = $_GET['surname'];
    $newEmail = $_GET['email'];
    $newAttivita = $_GET['attivita'];
    $newSettore = $_GET['settore'];
    $newPubblico = $_GET['pubblico'];
    $newUtilizzoLogo = $_GET['utilizzo_logo'];
    $newStilePreferito = $_GET['stile_preferito'];
    $newInteresse = $_GET['interesse'];

    //Per aggiornare i dati dell'utente nel database
    $sql = "UPDATE utenti SET nome='$newName', cognome='$newSurname', email='$newEmail', attivita='$newAttivita', settore='$newSettore', pubblico='$newPubblico', utilizzo_logo='$newUtilizzoLogo', stile_preferito='$newStilePreferito', interesse='$newInteresse' WHERE id=$userId";

    if ($conn->query($sql) === TRUE) {
        echo "Modifica avvenuta con successo";
    } else {
        echo "Errore nella modifica: " . $conn->error;
    }
} else {
    echo "Parametri mancanti per la ricerca o la modifica.";
}

$conn->close();
?>
