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
	const parentContainer = document.querySelector('#ranking');
	if (!parentContainer) {
		console.error('Cabeçalho não encontrado!');
		return;
	}

	// Criar container do mini ranking
	const rankingContainer = document.createElement('div');
	rankingContainer.className = 'flex flex-col';

	// Título do ranking
	const rankingTitle = document.createElement('div');
	rankingTitle.className = 'text-slate-950 text-sm mb-2 font-semibold';
	rankingTitle.textContent = '🏆 Top Jogadores';
	rankingContainer.appendChild(rankingTitle);

	// Container dos usuários
	const usersContainer = document.createElement('div');
	usersContainer.className = 'flex flex-col space-y-2';

	// Adicionar os dois usuários
	topUsers.forEach((user, index) => {
		const userItem = document.createElement('div');
		userItem.className =
			'flex items-center bg-white backdrop-blur-sm rounded-lg p-2 pr-3 shadow-md relative ';

		// Conteúdo do item de usuário
		userItem.innerHTML = `
		${index === 0 ? `
			<div class="absolute right-2 rounded-full bg-yellow-100 p-2 w-8 h-8 text-center text-xs">
				<!-- ping -->
				<span class="absolute -right-1 -top-1 flex h-3 w-3">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
				</span>
				🏆
			</div>
		` : ''}

		<div class="mr-3">
		  <img src="${user.image}" alt="${user.name}" class="w-8 h-8 rounded-full object-cover ring-1 ring-white/50">
		</div>
		<div class="flex flex-col">
		  <span class="text-slate-950 text-xs font-semibold">${user.name}</span>
		  <span class="text-slate-700 text-xs">${user.score} pts</span>
		</div>
	  `;

		usersContainer.appendChild(userItem);
	});

	rankingContainer.appendChild(usersContainer);

	// Inserir o ranking no container pai
	parentContainer.appendChild(rankingContainer);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', addMiniRanking);
