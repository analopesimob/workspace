	//recuperar valores: nome do produto, quantidade e valor
	//calcular o preco
	//adicionar no carrinho
	//atualizar valor total

function adicionar() {

    let produto = document.getElementById('produto').value;
	let nomeProduto = produto.split('-') [0];
	let valorUnitario = valor.split('R$') [1];
    let quantidade = document.getElementById('quantidade');
	let preco = quantidade.value * valorUnitario;

}