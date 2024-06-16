
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})


function usuario(){
    let btnSocial = document.querySelector('.btn-social')
    let divLogado = document.querySelector('.divLogado')

    let login = localStorage.getItem('login')

    let logado = document.getElementById('logado')

    let btnSair = document.getElementById('btnSair')

    if(localStorage.getItem('token') != null){
      

        btnSocial.setAttribute('style', 'display: none')
        btnSair.setAttribute('style', 'display: flex')
        divLogado.setAttribute('style', 'display: flex')


        logado.innerHTML = 'Olá, ' + login
    }
}


function sair(){
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}