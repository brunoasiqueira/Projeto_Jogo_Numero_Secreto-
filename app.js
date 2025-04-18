let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let NumeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial () {
    exibirTextoNaTela ("h1", "Jogo do Número Secreto");
    exibirTextoNaTela ("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial ();

function verificarChute () {
    let chute = document.querySelector ("input").value;
        
    if (chute == NumeroSecreto) {
        exibirTextoNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentantivas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ("p", mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    } else { 
        if (chute > NumeroSecreto) {
        exibirTextoNaTela ("p", "O número secreto é menor");
        } else {
        exibirTextoNaTela ("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo ();
    }
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteado = [];
    }
    if (listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumeroSorteado.push (numeroEscolhido);
        console.log (listaDeNumeroSorteado);
        return numeroEscolhido;
    }
} 

function limparCampo () {
    chute = document.querySelector ("input");
    chute.value = " ";
}

function reiniciarJogo() {
    NumeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById ("reiniciar").setAttribute ("disabled", true);
}