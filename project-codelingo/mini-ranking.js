// mini-ranking.js - Componente de ranking compacto para o cabeçalho

// Array com os dois melhores usuários
const topUsers = [
	{
		id: 1,
		name: 'Ana Rohde',
		score: 98,
		image: './eu-3.jpeg'
	},
	{
		id: 2,
		name: 'Felipe Rohde',
		score: 90,
		image: './amor.jpg'
	},
	{
		id: 3,
		name: 'Vinícius',
		score: 73,
		image: './easy.png'
	},
	{
		id: 4,
		name: 'Gilnei',
		score: 73,
		image: './easy.png'
	}
];

// Função para adicionar o mini ranking
function addMiniRanking() {
	const parentContainer = document.querySelector('#ranking');
	if (!parentContainer) {
		console.error('Cabeçalho não encontrado!');
		return;
	}

	// Criar container do mini ranking
	const rankingContainer = document.createElement('div');
	rankingContainer.className =
		'flex flex-col bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-4 mt-4';

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
		${
			index === 0
				? `
			<div class="absolute right-2 rounded-full bg-yellow-100 p-2 w-10 h-10 text-center text-xl">
				<!-- ping -->
				<span class="absolute -right-1 -top-1 flex h-3 w-3">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
				</span>
				🥇
			</div>
		`
				: ''
		}

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

	// Botão "Ver ranking completo"
	const viewAllButton = document.createElement('button');
	viewAllButton.className =
		'w-48 mx-auto mt-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-medium rounded-xl transition-colors hover:from-purple-700 hover:to-fuchsia-700 m-2px';
	viewAllButton.textContent = 'Ver ranking completo';

	// Adicionar evento de clique ao botão (opcional)
	viewAllButton.addEventListener('click', () => {
		// Redirecionar para a página de ranking completo ou mostrar modal
		console.log('Abrir ranking completo');
		//window.location.href = '/ranking-completo'; // Descomente para redirecionar
	});

	// Adicionar o botão ao container principal
	rankingContainer.appendChild(viewAllButton);

	// Inserir o ranking no container pai
	parentContainer.appendChild(rankingContainer);
}
// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', addMiniRanking);
