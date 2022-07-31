

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartao() {
    const cartaoSelect = document.querySelector(".select");
    cartaoSelect.classList.remove("select");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("select");
}

btnAvancar.addEventListener("click", function() {

    if (cartaoAtual === cartoes.length - 1 ) return;

    esconderCartao();

    cartaoAtual++;
    console.log(cartaoAtual);
    mostrarCartao(cartaoAtual)
});

btnVoltar.addEventListener("click", function() {

    if (cartaoAtual === 0 ) return;

    esconderCartao();

    cartaoAtual--;
    console.log(cartaoAtual);
    mostrarCartao(cartaoAtual);
});