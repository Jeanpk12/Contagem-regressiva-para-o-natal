// Mensagens de natal

const mensagensNatal = [
    "Que a magia do Natal traga alegria e amor para o seu coração!",
    "Desejo a você e sua família um Natal repleto de felicidade e harmonia.",
    "Que a paz e a esperança estejam presentes em todos os lares neste Natal.",
    "Que o Natal traga momentos de ternura e gratidão em sua vida.",
    "Que a luz do Natal brilhe em seu caminho e guie seus passos.",
    "Que o espírito natalino aqueça os corações de todos ao seu redor.",
    "Desejo que seu Natal seja uma celebração de amor e união.",
    "Que o verdadeiro significado do Natal ilumine seus dias.",
    "Neste Natal, que a felicidade esteja presente em todos os momentos.",
    "Desejo a você um Natal cheio de sorrisos e memórias preciosas.",
    "Que a magia do Natal se estenda por todo o ano que está por vir.",
    "Que a alegria do Natal contagie todos ao seu redor.",
    "Neste Natal, que cada sonho se torne uma realidade.",
];

let ultimaMensagemExibida = -1;

function exibirNovaMensagem() {
    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * mensagensNatal.length);
    } while (indiceAleatorio === ultimaMensagemExibida);

    ultimaMensagemExibida = indiceAleatorio;

    const mensagem = document.getElementById('mensagemNatal');
    mensagem.textContent = mensagensNatal[indiceAleatorio];
}

// Contagem regressiva

function atualizarContagemRegressiva() {
    const dataNatal = new Date("December 25, 2023 00:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = dataNatal - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = dias;
    document.getElementById("hour").innerHTML = horas;
    document.getElementById("minute").innerHTML = minutos;
    document.getElementById("second").innerHTML = segundos;
}

setInterval(atualizarContagemRegressiva, 1000);