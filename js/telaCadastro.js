const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const login = document.getElementById("login");
const senha = document.getElementById("senha");
const confirmSenha = document.getElementById("confirmSenha");
const nasc = document.getElementById("nasc");
const matName = document.getElementById("matName");
const celular = document.getElementById("celular");
const telefone = document.getElementById("telefone");

const uf = document.getElementById("uf");
const logradouro = document.getElementById("logradouro");
const numero = document.getElementById("numero");
const bairro = document.getElementById("bairro");
const cep = document.getElementById("cep");
const cidade = document.getElementById("cidade");


form.addEventListener("submit",(event) => {
    event.preventDefault(); //previne o comportamento padrão do submit

    checkForm();

})


username.addEventListener("blur", () => {
    checkInputUsername();
})


email.addEventListener("blur", () => {
    checkInputEmail();
})

login.addEventListener("blur", () => {
    checkInputLogin();
})

senha.addEventListener("blur", () => {
    checkInputSenha();
})

confirmSenha.addEventListener("blur", () => {
    checkInputConfirmSenha();
})

nasc.addEventListener("blur", () => {
    checkInputNasc();
})

matName.addEventListener("blur", () => {
    checkInputMatName();
})

celular.addEventListener("blur", () => {
    checkInputCelular();
})

telefone.addEventListener("blur", () => {
    checkInputTelefone();
})


uf.addEventListener("blur", () =>{
    checkInputUf();
})

numero.addEventListener("blur", () => {
    checkInputNumero();
})

bairro.addEventListener("blur", () => {
    checkInputBairro();
})

cep.addEventListener("blur", () => {
    checkInputCep();
})

cidade.addEventListener("blur", () => {
    checkInputCidade();
})


//================ validações ==================

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        erroInput(username, "Preencha corretamente")
    }else{
        const formItem = username.parentElement;
        formItem.className = "textfielde"
    }
}



function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        erroInput(email, "faz direito")
    }else{
        const formItem = email.parentElement;
        formItem.className = "textfielde"
    }
}

function checkInputLogin(){
    const loginValue = login.value;

    if(loginValue === ""){
        erroInput(login, "faz direito")
    } else if(loginValue.length < 6){
        erroInput(login, "login deve conter 6 caracteres")
    }else if(loginValue.length >6) {
        erroInput(login, "login deve conter 6 caracteres")
    }else{
        const formItem = login.parentElement;
        formItem.className = "textfielde"
    }
}

function checkInputSenha(){
    const senhaValue = senha.value;


    if(senhaValue === ""){
        erroInput(senha, "A senha é obrigatória")
    }else if(senhaValue.length <8 ){
        erroInput(senha, "A senha deve ter 8 digitos")
    }else{
        const formItem = senha.parentElement
        formItem.className = "textfielde"
    }
}

function checkInputConfirmSenha(){
    const confirmSenhaValue = confirmSenha.value;
    const senhaValue = senha.value;


    if(confirmSenhaValue === ""){
        erroInput(confirmSenha, "A senha é obrigatória")
    }else if(confirmSenhaValue !== senhaValue ){
        erroInput(confirmSenha, "senha incorreta")
    }else{
        const formItem = confirmSenha.parentElement
        formItem.className = "textfielde"
    }
}


function checkInputNasc(){
    const nascValue = nasc.value;

    if(nascValue === ""){
        erroInput(nasc, "faz direito")
    } else {
        const formItem = nasc.parentElement;
        formItem.className = "textfielde"
    }
}

function checkInputMatName(){
    const matNameValue = matName.value;

    if(matNameValue === ""){
        erroInput(matName, "faz direito")
    } else {
        const formItem = matName.parentElement;
        formItem.className = "textfielde"
    }
}

function checkInputCelular(){
    const celularValue = celular.value;

    if(celularValue === ""){
        erroInput(celular, "faz direito")
    } else {
        const formItem = celular.parentElement;
        formItem.className = "textfielde"
    }
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if(telefoneValue  === ""){
        erroInput(telefone, "ajeita isso")
    }else{
        const formItem = telefone.parentElement;
        formItem.className = "textfielde"
    }
}

// ====================== SEGUNDA PARTE DO FORMULÁRIO =======================

function checkInputUf(){
    const ufValue = uf.value;

    if(ufValue  === ""){
        erroInput(uf, "ajeita isso")
    }else{
        const formItem = uf.parentElement;
        formItem.className = "textfielde"
    }
}


function checkInputLogradouro(){
    const logradouroValue = logradouro.value;

    if(logradouroValue  === ""){
        erroInput(logradouro, "ajeita isso")
    }else{
        const formItem = logradouro.parentElement;
        formItem.className = "textfielde"
    }
}


function checkInputNumero(){
    const numeroValue = numero.value;

    if(numeroValue  === ""){
        erroInput(numero, "ajeita isso")
    }else{
        const formItem = numero.parentElement;
        formItem.className = "textfielde"
    }
}

function checkInputBairro(){
    const bairroValue = bairro.value;

    if(bairroValue  === ""){
        erroInput(bairro, "ajeita isso")
    }else{
        const formItem = bairro.parentElement;
        formItem.className = "textfielde"
    }
}

function checkInputCep(){
    const cepValue = cep.value;

    if(cepValue  === ""){
        erroInput(cep, "ajeita isso")
    }else{
        const formItem = cep.parentElement;
        formItem.className = "textfielde"
    }
}

function checkInputCidade(){
    const cidadeValue = cidade.value;

    if(cidadeValue  === ""){
        erroInput(cidade, "ajeita isso")
    }else{
        const formItem = cidade.parentElement;
        formItem.className = "textfielde"
    }
}

// validação de todos os campos ===============

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputLogin();
    checkInputSenha();
    checkInputConfirmSenha();
    checkInputNasc();
    checkInputMatName();
    checkInputCelular();
    checkInputTelefone();
    checkInputLogradouro();
    checkInputNumero();
    checkInputBairro();
    checkInputCep();
    checkInputCidade();
    checkInputUf();

    const formItems = form.querySelectorAll(".textfielde")

    const isValid = [...formItems].every( (item) => {
        return item.className === "textfielde" //so vai enviar se não houver a classe error
    })

    if(isValid){
        alert("Cadastrado com sucesso")
    } else{
        alert("preencha corretamente")
    }

}




// função par exibir erro
function erroInput(input, message){
    const formItem = input.parentElement; //parent pega a div pai do input nessa ocasião
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "textfielde error"
}