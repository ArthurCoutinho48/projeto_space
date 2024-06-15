<?php
// Inicie a sessão no início do seu script
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Página Principal</title>
</head>
<body>
    <?php
    // Verifique se o usuário está logado e exiba seu nome
    if(isset($_SESSION['nomeUsuario'])) {
        echo "<p>Olá, " . $_SESSION['nomeUsuario'] . "!</p>";
    } else {
        echo "<p>Você não está logado.</p>";
    }
    ?>
</body>
</html>
