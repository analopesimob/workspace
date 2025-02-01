alert('Boas vindas ao jogo do numero secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

// enquanto
while (chute != numeroSecreto){
	chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
	// se chute for igual ao numero secreto
	if (chute == numeroSecreto) {
		break;
	} else {
		if (chute > numeroSecreto) {		
			alert(`O numero secreto e menor que ${chute}`); 
		} else {
			alert(`O numero secreto e maior que ${chute}`);
		}
		//tentativas = tentativas + 1;
		tentativas++;
	}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
	alert(`Parabéns, você acertou! ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//	alert(`Parabéns, você acertou! ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//	alert(`Parabéns, você acertou! ${numeroSecreto} com ${tentativas} tentativa.`);
//}
