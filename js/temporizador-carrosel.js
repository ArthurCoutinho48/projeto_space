var indiceAtual = 0;
var radios = document.getElementsByName('btn-radio');

function mudarSlide() {
    // Desmarque o botão de rádio atual
    radios[indiceAtual].checked = false;

    // Incremente o índice ou volte para 0 se for o último slide
    indiceAtual = (indiceAtual + 1) % radios.length;

    // Marque o próximo botão de rádio
    radios[indiceAtual].checked = true;
}

// Defina o intervalo para mudar os slides (por exemplo, 5000ms = 5 segundos)
setInterval(mudarSlide, 5000);
