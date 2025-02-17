// criar uma funcao id
function alterarStatus (id) { 

	//chamar a funcao id
	let gameClicado = document.getElementById(`game-${id}`);
	let img = gameClicado.querySelector('.dashboard__item__img');
	let button = gameClicado.querySelector('.dashboard__item__button');
	let name = gameClicado.querySelector('.dashboard__item__name');

	//criando onclick button
	if (img.classList.contains('dashboard__item__img--rented')) {
		img.classList.remove('dashboard__item__img--rented');
		button.classList.remove('dashboard__item__button--return');
		button.textContent = 'Alugar';
	} else { 
		img.classList.add('dashboard__item__img--rented');
		button.classList.add('dashboard__item__button--return');
		button.textContent = 'Devolver';
	}


}
	