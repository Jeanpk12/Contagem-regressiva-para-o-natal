let mensagensNatal = [];
let ultimaMensagemExibida = -1;

// Carrega as mensagens do arquivo JSON
async function carregarMensagens() {
    try {
        const resposta = await fetch("./src/mensagens.json");
        const json = await resposta.json();
        mensagensNatal = json.mensagens;
    } catch (erro) {
        console.error("Erro ao carregar mensagens:", erro);
    }
}

// Exibe nova mensagem aleatória
function exibirNovaMensagem() {
    if (mensagensNatal.length === 0) return;

    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * mensagensNatal.length);
    } while (indiceAleatorio === ultimaMensagemExibida && mensagensNatal.length > 1);

    ultimaMensagemExibida = indiceAleatorio;

    const mensagem = document.getElementById('mensagemNatal');
    mensagem.textContent = mensagensNatal[indiceAleatorio];
}

// Atualiza o contador até o próximo Natal
function atualizarContagemRegressiva() {
    const agora = new Date();
    let anoAtual = agora.getFullYear();
    const natalDesteAno = new Date(`December 25, ${anoAtual} 00:00:00`);

    // Se já passou do Natal, calcula para o próximo ano
    if (agora > natalDesteAno) {
        anoAtual++;
    }

    const dataNatal = new Date(`December 25, ${anoAtual} 00:00:00`).getTime();
    const diferenca = dataNatal - agora.getTime();

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("day").textContent = dias;
    document.getElementById("hour").textContent = horas;
    document.getElementById("minute").textContent = minutos;
    document.getElementById("second").textContent = segundos;
}

carregarMensagens();
setInterval(atualizarContagemRegressiva, 1000);

