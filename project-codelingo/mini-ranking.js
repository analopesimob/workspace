// mini-ranking.js - Componente de ranking compacto para o cabeçalho

// Array com os dois melhores usuários
const topUsers = [
	{
		id: 1,
		name: 'Felipe Rohde',
		score: 90,
		image: './amor.jpg'
	},
	{
		id: 2,
		name: 'Ana Rohde',
		score: 98,
		image: './eu-2.jpg'
	}
];

// Função para adicionar o mini ranking ao cabeçalho
function addMiniRanking() {
	const header = document.querySelector('header');
	if (!header) {
		console.error('Cabeçalho não encontrado!');
		return;
	}

	// Criar container do mini ranking
	const rankingContainer = document.createElement('div');
	rankingContainer.className =
		'absolute top-4 right-4 flex flex-col items-end';

	// Título do ranking
	const rankingTitle = document.createElement('div');
	rankingTitle.className = 'text-white text-sm mb-2 font-semibold';
	rankingTitle.textContent = '🏆 Top Jogadores';
	rankingContainer.appendChild(rankingTitle);

	// Container dos usuários
	const usersContainer = document.createElement('div');
	usersContainer.className = 'flex flex-col space-y-2';

	// Adicionar os dois usuários
	topUsers.forEach((user, index) => {
		const userItem = document.createElement('div');
		userItem.className =
			'flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 pr-3 shadow-md';

		// Conteúdo do item de usuário
		userItem.innerHTML = `
		<div class="relative mr-3">
		  <img src="${user.image}" alt="${user.name}" class="w-8 h-8 rounded-full object-cover ring-1 ring-white/50">
		  ${
				index === 0
					? `
			<div class="absolute -top-2 -right-2">
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" class="w-4 h-4">
				<path d="M5 4a2 2 0 012-2h10a2 2 0 012 2v1H5V4zm9 7l1.8-1.8a.2.2 0 00-.297-.3L14 10.5V5h-4v5.5l-1.503-1.6a.2.2 0 00-.297.3L10 11 5 16h14l-5-5z"/>
			  </svg>
			</div>
		  `
					: ''
			}
		</div>
		<div class="flex flex-col">
		  <span class="text-white text-xs font-medium">${user.name}</span>
		  <span class="text-pink-200 text-xs">${user.score} pts</span>
		</div>
	  `;

		usersContainer.appendChild(userItem);
	});

	rankingContainer.appendChild(usersContainer);

	// Inserir o ranking no cabeçalho (tornando o cabeçalho relative se necessário)
	header.style.position = 'relative';
	header.appendChild(rankingContainer);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', addMiniRanking);
