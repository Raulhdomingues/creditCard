const nome = document.querySelector('#name');
const numero = document.querySelector('#number');
const mes = document.querySelector('.mes');
const ano = document.querySelector('.ano');
const cvc = document.querySelector('#cvc');

const numeroCartao = document.querySelector('.card-number');
const nomeCartao = document.querySelector('.card-name');
const expiracaoMes = document.querySelector('#exp-mes');
const expiracaoAno = document.querySelector('#exp-ano');

const codigoSeguranca = document.querySelector('.tarja-cvc');

numero.addEventListener('input', () => {
    numeroCartao.textContent = numero.value;
})

nome.addEventListener('input', () => {
    nomeCartao.textContent = nome.value;
});

mes.addEventListener('input', () => {
    expiracaoMes.textContent = mes.value;
})

ano.addEventListener('input', () => {
    expiracaoAno.textContent = ano.value;
})

cvc.addEventListener('input', () => {
    codigoSeguranca.textContent = cvc.value;
});