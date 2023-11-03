<?php
// Configuração do banco de dados
$servername = "http://localhost";
$username = "root";
$password = "330112";
$dbname = "projeto";

// Cria uma conexão com o MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Parâmetros do formulário
$nome = $_POST['nome'];
$setor = $_POST['setor'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$descricao = $_POST['descricao'];

// Consulta SQL para inserir dados
$sql = "INSERT INTO entidades_externas (nome, setor, email, telefone, descricao)
        VALUES ('$nome', '$setor', '$email', '$telefone', '$descricao')";

if ($conn->query($sql) === TRUE) {
    echo "Registro inserido com sucesso!";
} else {
    echo "Erro ao inserir registro: " . $conn->error;
}

// Fecha a conexão com o MySQL
$conn->close();
?>
