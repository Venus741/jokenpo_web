var maos = ['https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/papel-reverse.jpg', 'https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/tesoura-reverse.jpg', 'https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/pedra-reverse.jpg'];
function clicou() {
    var gerar1 = maos[Math.floor(Math.random() * maos.length)];
    var gerar2 = maos[Math.floor(Math.random() * maos.length)];
    var primeira_mao = document.getElementById("container_change1");
    var segunda_mao = document.getElementById("container_change2");
    if (primeira_mao && segunda_mao) {
        primeira_mao.innerHTML = "<img src=\"".concat(gerar1, "\" alt=\"M\u00E3o 1\" style=\"width: 100%; height: 100%\">");
        segunda_mao.innerHTML = "<img src=\"".concat(gerar2, "\" alt=\"M\u00E3o 2\" style=\"width: 100%; height: 100%\">");
    }
    else {
        console.error("Um ou ambos os elementos não foram encontrados.");
    }
}
