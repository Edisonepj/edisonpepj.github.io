<!DOCTYPE html>
<html>
<head>
    <title>Tela Inicial</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    
    <!-- Inclua a referência para o seu código JavaScript -->
    <script src="js/script.js"></script>
</head>
<body>
    <h1>Cadastro de Empresas</h1>
    <form action="cadastro.php" method="post">
        <label for="nome">Nome da Empresa:</label>
        <input type="text" id="nome" name="nome" required>
        <label for="setor">Setor:</label>
        <input type="text" id="setor" name "setor" required>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required>
        <label for="descricao">Descrição:</label>
        <textarea id="descricao" name="descricao" required></textarea>
        <button type="submit">Cadastrar</button>
    </form>
</body>
</html>
