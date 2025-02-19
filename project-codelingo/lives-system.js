// lives-system.js - Componente para exibir bandeira e sistema de vidas

// Número inicial de vidas
let lives = 5;

// Função para adicionar o sistema de vidas e bandeira
function addLivesSystem() {
    const parentContainer = document.querySelector('#ranking');
    if (!parentContainer) {
        console.error('Container de ranking não encontrado!');
        return;
    }

    // Criar container principal
    const livesContainer = document.createElement('div');
    livesContainer.className = 
        'flex flex-col bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-4 mb-4';
    
    // Header com bandeira dos EUA
    const header = document.createElement('div');
    header.className = 'flex items-center justify-between mb-3';
    
    // Bandeira dos EUA
    const flagContainer = document.createElement('div');
    flagContainer.className = 'flex items-center';
    flagContainer.innerHTML = `

        <div class="w-8 h-6 mr-2 rounded shadow-sm overflow-hidden flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 912 600">
                <rect width="912" height="600" fill="#bf0a30"/>
                <rect y="46.15" width="912" height="46.15" fill="#fff"/>
                <rect y="138.45" width="912" height="46.15" fill="#fff"/>
                <rect y="230.75" width="912" height="46.15" fill="#fff"/>
                <rect y="323.05" width="912" height="46.15" fill="#fff"/>
                <rect y="415.35" width="912" height="46.15" fill="#fff"/>
                <rect y="507.65" width="912" height="46.15" fill="#fff"/>
                <rect width="364.8" height="323.1" fill="#002868"/>
                <g fill="#fff">
                    <g id="s18">
                        <g id="s9">
                            <g id="s5">
                                <g id="s4">
                                    <path id="s" d="M24.8,13.9l7.6,23.4H8.4l19.3-14h-23.9l7.6,23.4L24.8,13.9z"/>
                                    <use xlink:href="#s" x="45.6"/>
                                    <use xlink:href="#s" x="91.2"/>
                                    <use xlink:href="#s" x="136.8"/>
                                </g>
                                <use xlink:href="#s" y="45.6"/>
                            </g>
                            <use xlink:href="#s4" y="91.2"/>
                        </g>
                        <use xlink:href="#s9" y="182.4"/>
                    </g>
                    <use xlink:href="#s18" x="182.4"/>
                </g>
            </svg>
			</div>

        <span class="text-slate-950 text-sm font-medium">Inglês</span>
    `;
    
    // Contador de vidas com um coração e número
    const livesCounter = document.createElement('div');
    livesCounter.className = 'text-slate-950 text-sm font-medium flex items-center';
    livesCounter.id = 'lives-counter';
    livesCounter.innerHTML = `
        <span class="text-red-500 text-lg mr-1">❤️</span>
        <span id="lives-number" class="font-bold">${lives}</span>
    `;
    
    header.appendChild(flagContainer);
    header.appendChild(livesCounter);
    livesContainer.appendChild(header);
    
    // Progresso
    const progressContainer = document.createElement('div');
    progressContainer.className = 'w-full bg-gray-200 rounded-full h-2.5';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'bg-gradient-to-r from-green-400 to-emerald-500 h-2.5 rounded-full';
    progressBar.id = 'progress-bar';
    progressBar.style.width = '100%';
    
    progressContainer.appendChild(progressBar);
    livesContainer.appendChild(progressContainer);
    
    // Inserir o container antes do primeiro filho do ranking
    if (parentContainer.firstChild) {
        parentContainer.insertBefore(livesContainer, parentContainer.firstChild);
    } else {
        parentContainer.appendChild(livesContainer);
    }
    
    // Expor função para diminuir vidas
    window.decreaseLives = decreaseLives;
}

// Função para atualizar a exibição de vidas
function updateLivesDisplay() {
    const livesNumber = document.getElementById('lives-number');
    if (!livesNumber) return;
    
    // Atualizar o número de vidas
    livesNumber.textContent = lives;
    
    // Se quiser um efeito visual quando perder vida
    livesNumber.classList.add('text-red-600', 'scale-125');
    setTimeout(() => {
        livesNumber.classList.remove('text-red-600', 'scale-125');
    }, 300);
}

// Função para diminuir vidas
function decreaseLives() {
    if (lives > 0) {
        lives--;
        updateLivesDisplay();
        
        // Atualizar barra de progresso
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = `${(lives / 5) * 100}%`;
            
            // Mudar cor baseado na quantidade de vidas
            if (lives <= 1) {
                progressBar.className = 'bg-gradient-to-r from-red-500 to-red-600 h-2.5 rounded-full';
            } else if (lives <= 3) {
                progressBar.className = 'bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full';
            }
        }
        
        // Verificar game over
        if (lives === 0) {
            const livesCounter = document.getElementById('lives-counter');
            if (livesCounter) {
                // Mudar o coração para cinza quando acabar as vidas
                livesCounter.innerHTML = `
                    <span class="text-gray-400 text-lg mr-1">💔</span>
                    <span id="lives-number" class="font-bold text-gray-500">0</span>
                `;
            }
            
            setTimeout(() => {
                alert('Game Over! Você perdeu todas as suas vidas.');
                // Opcionalmente reiniciar o jogo ou mostrar uma tela de game over
            }, 300);
        }
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', addLivesSystem);