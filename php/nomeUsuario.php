<?php
// Inicie a sessão no início do seu script
session_start();

// Verifique se o nome do usuário foi enviado via POST
if(isset($_POST['nomeUsuario'])) {
    // Salve o nome do usuário na sessão
    $_SESSION['nomeUsuario'] = $_POST['nomeUsuario'];
}
?>
