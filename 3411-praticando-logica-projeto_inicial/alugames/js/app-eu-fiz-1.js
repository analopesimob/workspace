//chamando a funcao
const alterarStatus = (index) => {
	/*
		1 - achar e atribuir o botao
		2 - achar e atribuir a imagem
		3 - checar se o boato ou imagem pai  tem a classe responsavel por estar aliugada
		4 - criar uma condicao ou usar o toggle para trocar a classe do botao e da imagem
		5 - trocar o texto do botao

	*/

	const element = document.getElementById(`game-${index}`);

	//const  = ()

	//1 - achar e atribuir o botao
	const button = element.querySelector('.dashboard__item__button');
	//2 - achar e atribuir a imagem
	const img = element.querySelector('.dashboard__item__img');
	//const mustReturn = element.querySelector('.dashboard__item__button--return');

	if (!element) {
		return;
	}

	button.classList.toggle('dashboard__item__button--return');
	img.classList.toggle('dashboard__item__img--rented');

	const isRented = img.classList.contains('dashboard__item__img--rented');
	//4 - criar uma condicao ou usar o toggle para trocar a classe do botao e da imagem

	// button.innerHTML = isRented ? 'Devolver' : 'Alugar';
	if (isRented){
		button.innerHTML = 'Devolver';
	} else {
		button.innerHTML = 'Alugar';
	}


}
 

//const click = button; 

	/*if (element){
		button.classList.remove('dashboard__item__button--return');
		img.classList.remove('dashboard__item__img--rented');
		click.textContent = 'Alugar'
	
		} else {
		button.classList.add('dashboard__item__button--return');
		img.classList.add('dashboard__item__img--rented');
		click.textContent = 'Devolver'
		}
	
	//if (click){
	//	return;
	// } else { textContent = ('Devolver');
	*/