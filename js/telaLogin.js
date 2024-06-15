function conferirUsuario(event){
    event.preventDefault();
    let login = localStorage.getItem('login');

    let pass = localStorage.getItem('senha');

    var usuario = document.getElementById('Idusuario')
    var senha = document.getElementById('Idsenha')

    if(login==usuario.value && pass==senha.value) {
       

        setTimeout(() =>{
             window.location.href = 'http://127.0.0.1:5503/index.html'
        }, 1000)
       
    } else {
        alert('usuario e senha invalidos')
        
    }
    
}