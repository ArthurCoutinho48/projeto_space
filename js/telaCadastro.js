
function validarNome() {
    if (username.value.length <= 14) {
        errorUsername.setAttribute('style', 'display:block')
        errorUsername.innerHTML = 'Nome Completo no minímo 15 caractereres'
    } else {
        errorUsername.setAttribute('style', 'display:none')
        validUsername = true
    }
}


function validarEmail() {
    if (email.value == '') {
        errorEmail.setAttribute('style', 'display:block')
        errorEmail.innerHTML = 'preencha o campo'
    } else {
        errorEmail.setAttribute('style', 'display:none')
    }
}


function validarLogin() {
    if (login.value === '') {
        errorLogin.setAttribute('style', 'display:block')
        errorLogin.innerHTML = 'preencha o campo'
        validLogin = false
    } else if (login.value.length < 6 || login.value.length > 6) {
        errorLogin.setAttribute('style', 'display:block')
        errorLogin.innerHTML = 'login deve conter 6 caracteres'
    } else {
        errorLogin.setAttribute('style', 'display:none')
        validLogin = true
    }
}


function validarSenha() {
    if (senha.value == '') {
        errorSenha.setAttribute('style', 'display:block')
        errorSenha.innerHTML = 'preencha o campo'
        validSenha = false
    } else if (senha.value.length < 8 || senha.value.length > 8) {
        errorSenha.setAttribute('style', 'display:block')
        errorSenha.innerHTML = 'senha deve conter 8 caracteres'
    } else {
        errorSenha.setAttribute('style', 'display:none')
        validSenha = true
    }
}


function validarConfirmSenha() {

    if (confirmSenha.value != senha.value) {
        errorConfirmSenha.setAttribute('style', 'display:block')
        errorConfirmSenha.innerHTML = 'senhas não conferem'
        validConfirmSenha = false
    } else {
        errorConfirmSenha.setAttribute('style', 'display:none')
        validConfirmSenha = true
    }
}


function validarNasc() {

    if (nasc.value == '') {
        errorNasc.setAttribute('style', 'display:block')
        errorNasc.innerHTML = 'preencha o campo'
        validNasc = false
    } else {
        errorNasc.setAttribute('style', 'display:none')
        validNasc = true
    }
}


function validarMatNome() {

    if (matName.value == '') {
        errorMatName.setAttribute('style', 'display:block')
        errorMatName.innerHTML = 'preencha o campo'
        validMatName = false
    } else {
        errorMatName.setAttribute('style', 'display:none')
        validMatName = true
    }
}


function validarCelular() {
    if (celular.value == '') {
        errorCelular.setAttribute('style', 'display:block')
        errorCelular.innerHTML = 'preencha o campo'
        validCelular = false
    } else {
        errorCelular.setAttribute('style', 'display:none')
        validCelular = true
    }
}


function validarTelefone() {
    if (telefone.value == '') {
        errorTelefone.setAttribute('style', 'display:block')
        errorTelefone.innerHTML = 'preencha o campo'
        validTelefone = false
    } else {
        errorTelefone.setAttribute('style', 'display:none')
        validTelefone = true
    }
}


function validarCep() {
    if (telefone.value == '') {
        errorTelefone.setAttribute('style', 'display:block')
        errorTelefone.innerHTML = 'preencha o campo'
        validTelefone = false
    } else {
        errorTelefone.setAttribute('style', 'display:none')
        validTelefone = true
    }
}


function validarBairro() {
    if (bairro.value == '') {
        erorrBairro.setAttribute('style', 'display:block')
        erorrBairro.innerHTML = 'preencha o campo'
        validBairro = false
    } else {
        erorrBairro.setAttribute('style', 'display:none')
        validBairro = true
    }
}


function validarLogradouro() {
    if (logradouro.value == '') {
        errorLogradouro.setAttribute('style', 'display:block')
        errorLogradouro.innerHTML = 'preencha o campo'
        validLogradouro = false
    } else {
        errorLogradouro.setAttribute('style', 'display:none')
        validLogradouro = true
    }
}


function validarNumero() {
    if (numero.value == '') {
        errorNumero.setAttribute('style', 'display:block')
        errorNumero.innerHTML = 'preencha o campo'
        validNumero = false
    } else {
        errorNumero.setAttribute('style', 'display:none')
        validNumero = true
    }
}


function validarUf() {
    if (uf.value == '') {
        errorUf.setAttribute('style', 'display:block')
        errorUf.innerHTML = 'preencha o campo'
        validUf = false
    } else {
        errorUf.setAttribute('style', 'display:none')
        validUf = true
    }
}


function validarCidade() {
    if (cidade.value == '') {
        errorCidade.setAttribute('style', 'display:block')
        errorCidade.innerHTML = 'preencha o campo'
        validCidade = false
    } else {
        errorCidade.setAttribute('style', 'display:none')
        validCidade = true
    }
}


function cadastrar(event){
    event.preventDefault();

    
let username = document.getElementById('username')


let email = document.getElementById('email')


let login = document.getElementById('login')


let senha = document.getElementById('senha')


let confirmSenha = document.getElementById('confirmSenha')


let nasc = document.getElementById('nasc')


let matName = document.getElementById('matName')


let celular = document.getElementById('celular')


let telefone = document.getElementById('telefone')


let cep = document.getElementById('cep')

let bairro = document.getElementById('bairro')

let logradouro = document.getElementById('logradouro')

let numero = document.getElementById('numero')


let uf = document.getElementById('uf')


let cidade = document.getElementById('cidade')

if( username.value !=''
&&  email.value != ''
&&  login.value != ''
&&  senha.value != ''
&&  confirmSenha.value !=''
&&  nasc.value != ''
&&  matName.value != ''
&&  celular.value != ''
&& telefone.value != ''
&& cep.value != ''
&& bairro.value != ''
&& logradouro.value != ''
&& numero.value != ''
&& uf.value != ''
&& cidade.value != ''){

   localStorage.setItem('nome', username.value);
   localStorage.setItem('login', login.value);
   localStorage.setItem('senha', senha.value);

window.location = 'http://127.0.0.1:5502/login.html'
} else {
    alert('preencha todos os campos')
}

    
}