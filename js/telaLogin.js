function conferirUsuario(event){
    event.preventDefault();
    let login = localStorage.getItem('login');

    let pass = localStorage.getItem('senha');

    var usuario = document.getElementById('Idusuario')
    var senha = document.getElementById('Idsenha')

    if(login==usuario.value && pass==senha.value) {
       

        setTimeout(() =>{
             location.href = 'http://127.0.0.1:5502/cadastro.html'
        }, 1000)

        let token = Math.random().toString(16).substring(2) 
        localStorage.setItem('token', token) 
       
    } else {
        alert('usuario e senha invalidos')
        
    }
    
}