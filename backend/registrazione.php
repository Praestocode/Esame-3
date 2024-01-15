<?php
session_start();

//Connessione al database
$servername = "89.46.111.99";
$username = "Sql1759572";
$password = "Virgiliopraesto1010972277@";
$dbname = "Sql1759572_1";

$conn = new mysqli($servername, $username, $password, $dbname);

//Verifica della connessione al database
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

//Funzione per sanitizzare i dati
function sanitize_data($data) {
    global $conn;
    return mysqli_real_escape_string($conn, $data);
}

//Recupero dei dati dal modulo di registrazione e sanitizzazione
$nome = sanitize_data($_POST['nome']);
$cognome = sanitize_data($_POST['cognome']);
$email = sanitize_data($_POST['email']);
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); //Hash della password per sicurezza

//Query per controllare se l'email esiste già
$sql_check_email = "SELECT id FROM utenti WHERE email='$email'";
$result_check_email = $conn->query($sql_check_email);

if ($result_check_email->num_rows > 0) {
    //Se l'email esiste già nel DB
    http_response_code(409);
    echo "Utente già registrato";
} else {
    //Se l'email non esiste, procedo con l'inserimento dei dati

    //Query INSERT nuovo utente
    $sql_insert_user = "INSERT INTO utenti (nome, cognome, email, password) 
                      VALUES ('$nome','$cognome','$email','$password')";

    if ($conn->query($sql_insert_user) === TRUE) {
        echo "Sto registrando di nuovo";

        //Recupero dell'ID dell'utente appena registrato
        $user_id = $conn->insert_id;

        //Verifica se la sessione viene impostata correttamente
        echo "SESSION dopo registrazione: ";
        var_dump($_SESSION);

        //Verifica se il cookie viene impostato correttamente
        echo "COOKIE dopo registrazione: ";
        var_dump($_COOKIE);

        setcookie("user_id", (int)$user_id, 0, "/"); //Imposto un cookie di sessione con il nome "user_id"

        $_SESSION['user_id'] = $user_id;

        //Redirect verso il questionario
        header("Location: inserisci_risposte.php?user_id=$user_id");
        exit();

    } else {
        echo "Errore durante la registrazione: " . $conn->error;
    }
}

$conn->close();
?>
