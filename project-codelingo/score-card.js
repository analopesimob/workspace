// score-card.js - Componente com progressão de níveis dinâmica
let scoreValue = 0;
let currentUserLevel = 1;

// Definição dos níveis e pontos necessários
const levels = [
	{ level: 1, pointsNeeded: 0 },
	{ level: 2, pointsNeeded: 10 }
];

function calculateLevel(score) {
	let currentLevel = 1;
	let nextLevel = 10;
	let pointsForNextLevel = 2;
	let progress = 0;

	// Encontrar o nível atual e o próximo baseado na pontuação
	for (let i = levels.length - 1; i >= 0; i--) {
		if (score >= levels[i].pointsNeeded) {
			currentLevel = levels[i].level;

			if (i < levels.length - 1) {
				nextLevel = levels[i + 1].level;
				pointsForNextLevel = levels[i + 1].pointsNeeded - score;

				// Calcular a porcentagem de progresso para o próximo nível
				const levelRange =
					levels[i + 1].pointsNeeded - levels[i].pointsNeeded;
				const pointsInCurrentLevel = score - levels[i].pointsNeeded;
				progress = Math.floor(
					(pointsInCurrentLevel / levelRange) * 100
				);
			} else {
				// Se estiver no nível máximo
				nextLevel = 'Máx';
				pointsForNextLevel = 0;
				progress = 100;
			}
			break;
		}
	}

	return { currentLevel, nextLevel, pointsForNextLevel, progress };
}

function addScoreCard() {
	const parentContainer = document.querySelector('#ranking');
	if (!parentContainer) {
		console.error('Container de ranking não encontrado!');
		return;
	}

	// Verificar se o cartão de pontuação já existe
	if (document.getElementById('score-card')) {
		return;
	}

	// Obter pontuação atual do elemento global
	const globalScoreElement = document.getElementById('score');
	if (globalScoreElement) {
		scoreValue = parseInt(globalScoreElement.textContent) || 0;
	}

	// Calcular informações de nível baseadas na pontuação atual
	const { currentLevel, nextLevel, pointsForNextLevel, progress } =
		calculateLevel(scoreValue);

	// Criar container do cartão de pontuação
	const scoreCardContainer = document.createElement('div');
	scoreCardContainer.id = 'score-card';
	scoreCardContainer.className =
		'flex flex-col bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-4 mt-4';

	// Título do cartão com pontuação integrada
	const cardHeader = document.createElement('div');
	cardHeader.className = 'flex justify-between items-center mb-3';
	cardHeader.innerHTML = `
    <div class="text-slate-950 text-sm font-semibold">Sua Pontuação</div>
    <div id="score-display" class="text-xl font-bold text-fuchsia-700">${scoreValue}</div>
  `;
	scoreCardContainer.appendChild(cardHeader);

	// Barra de progresso dinâmica
	const progressContainer = document.createElement('div');
	progressContainer.className = 'mt-1';
	progressContainer.id = 'progress-container';
	progressContainer.innerHTML = `
    <div class="flex justify-between text-xs text-slate-600 mb-1">
      <span>Nível ${currentLevel}</span>
      <span>Nível ${nextLevel}</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div id="level-progress-bar" class="bg-gradient-to-r from-purple-800 to-fuchsia-700 h-2.5 rounded-full transition-all duration-500 ease-out" style="width: ${progress}%"></div>
    </div>
    <div id="points-to-next-level" class="text-xs text-slate-500 mt-1 text-center">
      ${pointsForNextLevel > 0 ? `${pointsForNextLevel} pontos para o próximo nível` : 'Nível máximo alcançado!'}
    </div>
  `;

	scoreCardContainer.appendChild(progressContainer);

	// Adicionar efeito de brilho na barra quando pontuar
	const glowEffect = document.createElement('style');
	glowEffect.textContent = `
    @keyframes progress-glow {
      0% { box-shadow: 0 0 5px rgba(236, 72, 153, 0.5); }
      50% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.8); }
      100% { box-shadow: 0 0 5px rgba(236, 72, 153, 0.5); }
    }
    .progress-glow {
      animation: progress-glow 1s ease-in-out;
    }
  `;
	document.head.appendChild(glowEffect);

	// Inserir o cartão de pontuação no container pai
	parentContainer.appendChild(scoreCardContainer);

	// Função para atualizar a pontuação e o progresso
	window.updateScoreCard = function () {
		const globalScoreElement = document.getElementById('score');
		if (!globalScoreElement) return;

		const newScore = parseInt(globalScoreElement.textContent) || 0;

		// Se a pontuação aumentou
		if (newScore > scoreValue) {
			const progressBar = document.getElementById('level-progress-bar');
			if (progressBar) {
				progressBar.classList.add('progress-glow');
				setTimeout(() => {
					progressBar.classList.remove('progress-glow');
				}, 1000);
			}
		}

		scoreValue = newScore;

		// Atualizar o número da pontuação
		const scoreDisplay = document.getElementById('score-display');
		if (scoreDisplay) {
			scoreDisplay.textContent = scoreValue;

			// Efeito visual ao pontuar
			scoreDisplay.classList.add('scale-110', 'text-rose-600');
			setTimeout(() => {
				scoreDisplay.classList.remove('scale-110', 'text-rose-600');
			}, 300);
		}

		// Atualizar informações de nível
		const { currentLevel, nextLevel, pointsForNextLevel, progress } =
			calculateLevel(scoreValue);

		// Verificar se o usuário completou um nível
		const levelCompleted = currentLevel > currentUserLevel;

		// Atualizar textos dos níveis
		const progressContainer = document.getElementById('progress-container');
		if (progressContainer) {
			const levelTexts = progressContainer.querySelector('.flex');
			if (levelTexts) {
				levelTexts.innerHTML = `
          <span>Nível ${currentLevel}</span>
          <span>Nível ${nextLevel}</span>
        `;
			}

			// Atualizar barra de progresso
			const progressBar = document.getElementById('level-progress-bar');
			if (progressBar) {
				progressBar.style.width = `${progress}%`;
			}

			// Atualizar texto de pontos para próximo nível
			const pointsText = document.getElementById('points-to-next-level');
			if (pointsText) {
				if (progress === 100 && currentLevel < 8) {
					pointsText.textContent = '🎉 Nível completado!';
				} else {
					pointsText.textContent =
						pointsForNextLevel > 0
							? `${pointsForNextLevel} pontos para o próximo nível`
							: 'Nível máximo alcançado!';
				}
			}

			// Adicionar botão "Próximo Nível" se o usuário completou o nível atual
			if (progress === 100 && currentLevel < 8) {
				// Remover botão antigo se existir
				const existingButton =
					document.getElementById('next-level-btn');
				if (existingButton) {
					existingButton.remove();
				}

				// Adicionar botão "Próximo Nível"
				if (!document.getElementById('next-level-btn')) {
					const nextLevelBtn = document.createElement('button');
					nextLevelBtn.id = 'next-level-btn';
					nextLevelBtn.className =
						'w-48 mx-auto mt-2 py-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium rounded-xl shadow-md transform transition-all duration-200 hover:shadow-lg hover:from-purple-700 hover:to-fuchsia-700 flex items-center justify-center m-2px';

	
					
						nextLevelBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Avançar para Nível ${currentLevel}
          `;

					// Adicionar efeito de pulsar ao botão
					nextLevelBtn.style.animation = 'pulse 1.5s infinite';
					const pulseKeyframes = document.createElement('style');
					pulseKeyframes.textContent = `
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
          `;
					document.head.appendChild(pulseKeyframes);

					// Adicionar evento de clique
					nextLevelBtn.addEventListener('click', () => {
						// Aqui você pode adicionar a lógica para carregar o próximo nível
						currentUserLevel = currentLevel + 1;

						// Feedback visual
						nextLevelBtn.textContent = 'Carregando...';
						nextLevelBtn.disabled = true;
						nextLevelBtn.style.opacity = '0.7';

						// Simular carregamento do próximo nível (substitua por sua lógica real)
						setTimeout(() => {
							alert(
								`Bem-vindo ao próximo Nível! Novos desafios aguardam você.`
							);
							nextLevelBtn.remove();

							// Você pode adicionar aqui código para carregar novos cartões ou conteúdo
							// Por exemplo: loadNewChallenges(currentUserLevel);
						}, 1000);
					});

					progressContainer.appendChild(nextLevelBtn);
				}
			} else {
				// Remover botão se não estiver mais no fim do nível
				const existingButton =
					document.getElementById('next-level-btn');
				if (existingButton) {
					existingButton.remove();
				}
			}
		}

		// Atualizar a referência do nível atual do usuário
		currentUserLevel = currentLevel;
	};
}

// Observador para atualizar a pontuação quando mudar
function setupScoreObserver() {
	const scoreElement = document.getElementById('score');
	if (!scoreElement) return;

	// Configurar um MutationObserver para monitorar mudanças no elemento de pontuação
	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
			if (
				mutation.type === 'childList' ||
				mutation.type === 'characterData'
			) {
				if (window.updateScoreCard) {
					window.updateScoreCard();
				}
			}
		});
	});

	// Iniciar observação
	observer.observe(scoreElement, {
		childList: true,
		characterData: true,
		subtree: true
	});
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
	addScoreCard();
	setupScoreObserver();
});
