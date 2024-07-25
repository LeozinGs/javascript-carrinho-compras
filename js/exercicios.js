//Exercicio 1
function ativarBotao() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let section = document.getElementById('exercicio-1');
    section.querySelector('.hello__text').innerHTML = `Olá ${nome.charAt(0).toUpperCase() + nome.slice(1)}. Vejo que você tem ${idade} anos de idade`;

    console.log(nome);
    console.log(idade);
}

//Exercicio 2
function modificarTexto() {
    let texto = document.getElementById('text').value;

    let campo = document.getElementById('exercicio-2');
    campo.querySelector('.text__to__modify').textContent = `${texto}`;
}

function resetar() {
    let input = document.getElementById('text');
    input.value = '';
    let campo =  document.getElementById('exercicio-2');
    campo.querySelector('.text__to__modify').textContent = `Olá!, escreva algo na caixa e clique no botão para me modificar.`;
}

//Exercicio 3
function somarNumeros() {
    let exercicio = document.getElementById('exercicio-3');
    let n1 = parseInt(exercicio.querySelector('.input__number1').value);
    let n2 = parseInt(exercicio.querySelector('.input__number2').value);

    exercicio.querySelector('.text__sum').textContent = `A soma dos valores: ${n1} + ${n2} é igual á: ${n1 + n2}`;
}

function resetarNumeros() {
    let exercicio = document.getElementById('exercicio-3');
    exercicio.querySelector('.input__number1').value = '';
    exercicio.querySelector('.input__number2').value = '';

    exercicio.querySelector('.text__sum').textContent = 'A soma dos valores:';
}

//Exercicio 4
function separarFrases() {
    let exercicio = document.getElementById('exercicio-4');
    let sentencas = exercicio.querySelector('.sentence__input').value;

    let primeiraSentenca = sentencas.split(';')[0];
    let segundaSentenca = sentencas.split(';')[1];

    exercicio.querySelector('.rip__sentences1').textContent = `${primeiraSentenca}`
    exercicio.querySelector('.rip__sentences2').textContent = `${segundaSentenca}`
}

//Exercicio 5
function separarNumeros() {
    let exercicio = document.getElementById('exercicio-5');
    let numeros = exercicio.querySelector('.number__input').value;

    let primeiroNumero = numeros.split(',')[0];
    let segundoNumero = numeros.split(',')[1];

    exercicio.querySelector('.rip__number1').textContent = `${primeiroNumero}`
    exercicio.querySelector('.rip__number2').textContent = `${segundoNumero}`
    
}