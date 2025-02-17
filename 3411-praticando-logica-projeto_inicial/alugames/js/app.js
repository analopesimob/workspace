const alterarStatus = button => {

	const parentNode = button.parentNode;
	const img = parentNode.querySelector('.dashboard__item__img');

	if (!img){
		return;
	}	

	const mustReturn = button.classList.contains ('dashboard__item__button--return');
		button.classList.toggle('dashboard__item__button--return');
		img.classList.toggle('dashboard__item__img--rented');

		if (mustReturn){
			button.innerHTML = 'Alugar';
		} else {
			button.innerHTML = 'Devolver';
		}

	}
		
		const buttons = document.querySelectorAll ('.dashboard__item__button');
		buttons.forEach(button =>{
			button.addEventListener ('click', (event) => {
				event.preventDefault();
				alterarStatus (button);		
			})
		});
	