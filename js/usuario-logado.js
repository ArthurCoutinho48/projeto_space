// Quando o usuário submeter o formulário de login
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();

    // Obtenha o nome de usuário do localStorage
    var nomeUsuario = localStorage.getItem('nomeUsuario');

    // Envie o nome do usuário para o servidor usando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'salvarNomeUsuario.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('nomeUsuario=' + nomeUsuario);

    // Redirecione para a página principal após o envio
    window.location.href = 'paginaPrincipal.php';
};
