const alterarStatus = (index) => {
	// no querySelector
	// id começam com #[id]
	// classes começam com .[classe]
	// document.querySelector(`#game-${index}`);

	// 1. capturamos o elemento pai
	const element = document.getElementById(`game-${index}`);

	if (!element) {
		return;
	}

	// capturamos o botao
	const button = element.querySelector('.dashboard__item__button');
	const img = element.querySelector('.dashboard__item__img');

	if (!button || !img) {
		return;
	}

	// precisa devolver
	// checamos se o botao contem a classe
	const mustReturn = button.classList.contains('dashboard__item__button--return');

	// ligamos/desligamos a classe
	button.classList.toggle('dashboard__item__button--return');
	img.classList.toggle('dashboard__item__img--rented');
	
	/*
		toggle é o mesmo que:

		if (mustReturn) {
			button.classList.remove('dashboard__item__button--return');
			img.classList.remove('dashboard__item__img--rented');
		} else {
			button.classList.add('dashboard__item__button--return');
			img.classList.add('dashboard__item__img--rented');
		}
	*/

	if (mustReturn) {
		button.innerHTML = 'Alugar';
	} else {
		button.innerHTML = 'Devolver';
	}


};

window.alterarStatus = alterarStatus;