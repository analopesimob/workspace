const vocabulary = [
	// JavaScript Básico
	{ word: 'function', translation: 'função', category: 'JavaScript' },
	{ word: 'variable', translation: 'variável', category: 'JavaScript' },
	{ word: 'string', translation: 'texto', category: 'JavaScript' },
	{ word: 'array', translation: 'lista', category: 'JavaScript' },
	{ word: 'object', translation: 'objeto', category: 'JavaScript' },
	{ word: 'loop', translation: 'laço', category: 'JavaScript' },
	{ word: 'if/else', translation: 'se/senão', category: 'JavaScript' },
	{ word: 'return', translation: 'retornar', category: 'JavaScript' },
	{ word: 'console', translation: 'console', category: 'JavaScript' },
	{ word: 'boolean', translation: 'booleano', category: 'JavaScript' },

	// Frontend Básico
	{ word: 'button', translation: 'botão', category: 'Frontend' },
	{ word: 'header', translation: 'cabeçalho', category: 'Frontend' },
	{ word: 'footer', translation: 'rodapé', category: 'Frontend' },
	{ word: 'navbar', translation: 'barra de navegação', category: 'Frontend' },
	{ word: 'sidebar', translation: 'barra lateral', category: 'Frontend' },
	{ word: 'menu', translation: 'menu', category: 'Frontend' },
	{ word: 'link', translation: 'link', category: 'Frontend' },
	{ word: 'image', translation: 'imagem', category: 'Frontend' },
	{ word: 'form', translation: 'formulário', category: 'Frontend' },
	{ word: 'label', translation: 'etiqueta', category: 'Frontend' },
	{ word: 'ring', translation: 'anel', category: 'Frontend' },

	// CSS
	{ word: 'display', translation: 'exibição', category: 'CSS' },
	{ word: 'background', translation: 'fundo', category: 'CSS' },
	{ word: 'color', translation: 'cor', category: 'CSS' },
	{ word: 'border', translation: 'borda', category: 'CSS' },
	{ word: 'margin', translation: 'margem', category: 'CSS' },
	{ word: 'padding', translation: 'preenchimento', category: 'CSS' },
	{ word: 'width', translation: 'largura', category: 'CSS' },
	{ word: 'height', translation: 'altura', category: 'CSS' },
	{ word: 'position', translation: 'posição', category: 'CSS' },
	{ word: 'float', translation: 'flutuação', category: 'CSS' },

	// Eventos e Interações
	{ word: 'click', translation: 'clique', category: 'Events' },
	{ word: 'hover', translation: 'pairar', category: 'Events' },
	{ word: 'submit', translation: 'enviar', category: 'Events' },
	{ word: 'scroll', translation: 'rolar', category: 'Events' },
	{ word: 'drag', translation: 'arrastar', category: 'Events' },
	{ word: 'drop', translation: 'soltar', category: 'Events' },
	{ word: 'keypress', translation: 'pressionar tecla', category: 'Events' },
	{ word: 'load', translation: 'carregar', category: 'Events' },
	{ word: 'resize', translation: 'redimensionar', category: 'Events' },
	{ word: 'swipe', translation: 'deslizar', category: 'Events' },

	// Tipos de Dados
	{ word: 'number', translation: 'número', category: 'Data Types' },
	{ word: 'null', translation: 'nulo', category: 'Data Types' },
	{ word: 'undefined', translation: 'indefinido', category: 'Data Types' },
	{ word: 'symbol', translation: 'símbolo', category: 'Data Types' },
	{ word: 'bigint', translation: 'inteiro grande', category: 'Data Types' },
	{ word: 'date', translation: 'data', category: 'Data Types' },
	{ word: 'map', translation: 'mapa', category: 'Data Types' },
	{ word: 'set', translation: 'conjunto', category: 'Data Types' },
	{ word: 'promise', translation: 'promessa', category: 'Data Types' },
	{ word: 'error', translation: 'erro', category: 'Data Types' },

	// Métodos de Array
	{ word: 'push', translation: 'empurrar', category: 'Array Methods' },
	{ word: 'pop', translation: 'remover último', category: 'Array Methods' },
	{
		word: 'shift',
		translation: 'remover primeiro',
		category: 'Array Methods'
	},
	{
		word: 'unshift',
		translation: 'adicionar primeiro',
		category: 'Array Methods'
	},
	{ word: 'splice', translation: 'emendar', category: 'Array Methods' },
	{ word: 'slice', translation: 'fatiar', category: 'Array Methods' },
	{ word: 'concat', translation: 'concatenar', category: 'Array Methods' },
	{ word: 'join', translation: 'juntar', category: 'Array Methods' },
	{ word: 'filter', translation: 'filtrar', category: 'Array Methods' },
	{ word: 'map', translation: 'mapear', category: 'Array Methods' },

	// Conceitos Web
	{ word: 'server', translation: 'servidor', category: 'Web' },
	{ word: 'client', translation: 'cliente', category: 'Web' },
	{ word: 'database', translation: 'banco de dados', category: 'Web' },
	{ word: 'API', translation: 'interface de programação', category: 'Web' },
	{ word: 'request', translation: 'requisição', category: 'Web' },
	{ word: 'response', translation: 'resposta', category: 'Web' },
	{ word: 'route', translation: 'rota', category: 'Web' },
	{ word: 'endpoint', translation: 'ponto de extremidade', category: 'Web' },
	{ word: 'middleware', translation: 'middleware', category: 'Web' },
	{ word: 'cache', translation: 'cache', category: 'Web' },

	// Debug e Teste
	{ word: 'debug', translation: 'depurar', category: 'Testing' },
	{ word: 'breakpoint', translation: 'ponto de parada', category: 'Testing' },
	{ word: 'test', translation: 'teste', category: 'Testing' },
	{ word: 'bug', translation: 'erro', category: 'Testing' },
	{ word: 'log', translation: 'registro', category: 'Testing' },
	{ word: 'trace', translation: 'rastrear', category: 'Testing' },
	{ word: 'assertion', translation: 'asserção', category: 'Testing' },
	{ word: 'mock', translation: 'simulação', category: 'Testing' },
	{ word: 'coverage', translation: 'cobertura', category: 'Testing' },
	{ word: 'benchmark', translation: 'referência', category: 'Testing' },

	// UI/UX
	{ word: 'layout', translation: 'layout', category: 'UI/UX' },
	{ word: 'responsive', translation: 'responsivo', category: 'UI/UX' },
	{ word: 'grid', translation: 'grade', category: 'UI/UX' },
	{ word: 'flex', translation: 'flexível', category: 'UI/UX' },
	{ word: 'animation', translation: 'animação', category: 'UI/UX' },
	{ word: 'transition', translation: 'transição', category: 'UI/UX' },
	{ word: 'template', translation: 'modelo', category: 'UI/UX' },
	{ word: 'theme', translation: 'tema', category: 'UI/UX' },
	{ word: 'modal', translation: 'modal', category: 'UI/UX' },
	{ word: 'tooltip', translation: 'dica', category: 'UI/UX' },

	// Segurança
	{
		word: 'authentication',
		translation: 'autenticação',
		category: 'Security'
	},
	{ word: 'authorization', translation: 'autorização', category: 'Security' },
	{ word: 'token', translation: 'token', category: 'Security' },
	{ word: 'encryption', translation: 'criptografia', category: 'Security' },
	{ word: 'password', translation: 'senha', category: 'Security' },
	{ word: 'hash', translation: 'hash', category: 'Security' },
	{ word: 'cookie', translation: 'cookie', category: 'Security' },
	{ word: 'session', translation: 'sessão', category: 'Security' },
	{ word: 'firewall', translation: 'firewall', category: 'Security' },
	{ word: 'proxy', translation: 'proxy', category: 'Security' }
];

let score = 0;
const scoreElement = document.getElementById('score');
const cardsContainer = document.getElementById('cards');

vocabulary.forEach(item => {
	const card = document.createElement('div');
	card.className =
		'bg-white rounded-xl p-5 transform transition hover:-translate-y-1 duration-200 shadow-xl ring-1 ring-black/10';
	card.innerHTML = `
	<div class="text-xl text-gray-800 mb-3">${item.word}</div>
	<div class="space-y-2">
		<input type="text" 
			class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors duration-200" 
			placeholder="Digite a tradução...">
		<button class="w-full bg-gradient-to-r from-rose-400 to-rose-500 hover:bg-rose-500 text-white py-2 px-4 rounded-lg shadow-md transform transition-all duration-200 hover:shadow-lg active:translate-y-0.5">
		Verificar
		</button>
	</div>
	<div class="mt-3 py-2 px-3 rounded-lg text-center hidden"></div>
	<div class="inline-block mt-3 px-3 py-1 rounded-lg text-sm bg-rose-50 text-rose-600">
		${item.category}
	</div>
	`;

	// referenciar as classes novamente
	const button = card.querySelector('button');
	const input = card.querySelector('input');
	const result = card.querySelector('div:nth-child(3)');

	button.addEventListener('click', () => {
		const userAnswer = input.value.toLowerCase().trim();
		const correctAnswer = item.translation.toLowerCase();

		if (userAnswer === correctAnswer) {
			result.textContent = '✅ Correto!';
			result.className =
				'mt-3 py-2 px-3 rounded-lg text-center bg-green-50 text-green-800';
			score++;
			scoreElement.textContent = score;
			input.disabled = true;
			button.disabled = true;
			input.className =
				'w-full px-3 py-2 border-2 border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed';
			button.className =
				'w-full bg-gray-400 text-white py-2 px-4 rounded-lg cursor-not-allowed';
		} else {
			result.textContent = `❌ Incorreto. A resposta correta é: ${item.translation}`;
			result.className =
				'mt-3 py-2 px-3 rounded-lg text-center bg-red-50 text-red-800';
		}
		result.classList.remove('hidden');
	});

	input.addEventListener('keypress', e => {
		if (e.key === 'Enter') {
			button.click();
		}
	});

	cardsContainer.appendChild(card);
});
