let NumeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial () {
    exibirTextoNaTela ("h1", "Jogo do Número Secreto");
    exibirTextoNaTela ("p", "Tente adivinhar o número secreto entre 1 e 10!");
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
        exibirTextoNaTela ("p", "O número secreto é menor que o chute");
        } else {
        exibirTextoNaTela ("p", "O número secreto é maior que o chute");
        }
        tentativas++;
        limparCampo ();
    }
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
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