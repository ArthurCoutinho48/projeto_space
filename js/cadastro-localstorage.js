// Suponha que você tenha um valor armazenado no localStorage
var nomeUsuario = tela.cadastro.getItem('nomeUsuario');

// Crie uma função para enviar esses dados ao servidor
function enviarDados() {
    // Inicialize um objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'processar.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Defina uma função para ser chamada quando a requisição for concluída
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            // A requisição foi bem-sucedida
            console.log('Dados enviados: ' + xhr.responseText);
        } else {
            // A requisição falhou
            console.log('Erro ao enviar dados');
        }
    };

    // Envie os dados para o servidor
    xhr.send('nomeUsuario=' + encodeURIComponent(nomeUsuario));
}

// Chame a função enviarDados quando for necessário, por exemplo, após o login
enviarDados();
