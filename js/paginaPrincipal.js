// este codigo é usado para criar um carrosel na pag
// $('#area-postagem').slick();


const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})