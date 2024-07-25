//Calculando o valor total do carrinho
let valorTotal = 0;

//Iniciando o Carrinho de compras e o Valor total zerados
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = `R$${0}`;


function adicionar() {

    //Recuperando o valor da quantidade escrita no input
    let quantidade = document.getElementById('quantidade').value;

    //Criando a condicional que só adicionará um item no carrinho quanto a quantidade for maior que 0
    if (quantidade > 0) {

        //Recuperando os valores de: Nome do produto e Valor do produto
        let produto = document.getElementById('produto').value;

        //Dividindo o valor recuperado para pegar somento o nome do produto
        let nomeProduto = produto.split('-')[0];

        //Dividindo novamente o valor recuperado para pegar somente o valor do produto e transformalo em um número inteiro
        let valorProduto = parseInt(produto.split('-')[1].replace('R$', ''));

        //Multiplicando o valor do produto pela quantidade
        let subTotal = quantidade * valorProduto;

        //Adicionando finalmente o produto ao carrinho de compras
        let listaCarrinho = document.getElementById('lista-produtos');
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

        //Adicionando e somando o valor total do carrinho de compras
        let textoValorTotal = document.getElementById('valor-total');
        textoValorTotal.innerHTML = `R$${valorTotal = valorTotal + subTotal}`;

        //Zerando o input de quantidade
        document.getElementById('quantidade').value = '';

    } else {
        alert('O campo "Qtde." precisa ser preenchido');
    }

}

//Limpando Carrinho, Total geral e a variavel que guarda o Total geral
function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$${0}`;
    valorTotal = 0;
}