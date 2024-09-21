
// Array contendo as três imagens com as mãos do jogo
const maos: string[] = [
    'https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/papel-reverse.jpg', 
    'https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/tesoura-reverse.jpg', 
    'https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/pedra-reverse.jpg'
];

// Função que será chamada quando o botão for clicado para começar o jogo
function clicou():void {

    // Variáveis que recebem o array com imagens e os seleciona de forma aleatória
    const gerar1: string = maos[Math.floor(Math.random() * maos.length)];
    const gerar2: string = maos[Math.floor(Math.random() * maos.length)];

    // Recebe as div que receberão as imagens
    const primeira_mao:HTMLElement | null = document.getElementById("container_change1");
    const segunda_mao:HTMLElement | null = document.getElementById("container_change2");

    // Trata as variáveis de froma que sejam identificados possíveis problemas com elas
    if (primeira_mao && segunda_mao) {

        // Imagens que serão recebidas nas divs
        primeira_mao.innerHTML = `<img src="${gerar1}" alt="Mão 1" style="width: 100%; height: 100%">`;
        segunda_mao.innerHTML = `<img src="${gerar2}" alt="Mão 2" style="width: 100%; height: 100%">`;

    } else {
        console.error("Um ou ambos os elementos não foram encontrados.");

    }
}