let prevButton = document.getElementById('prev'); // Seleciona pelo ID
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let currentIndex = 0;  // Índice do item atual

// Função para atualizar a navegação
function updateNavigation() {
    // Esconde todos os itens
    items.forEach((item, index) => {
        item.classList.remove('active');
        dots[index].classList.remove('active');
    });

    // Mostra o item ativo
    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    // Atualiza o número do indicador
    indicator.querySelector('.number').textContent = `0${currentIndex + 1}`;
    
    // Adiciona o evento de clique ao botão "Saiba Mais" do item atual
    const informationButton = items[currentIndex].querySelector('.information');
    informationButton.addEventListener('click', () => {
        // Exemplo de ação ao clicar no botão "Saiba Mais"
        alert('Mais informações sobre o carro: ' + items[currentIndex].querySelector('h2').textContent);
        // Ou aqui você pode realizar qualquer outra ação, como abrir um modal, redirecionar, etc.
    });
}

// Lógica para avançar os itens
nextButton.onclick = () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Volta para o primeiro item
    }
    updateNavigation();  // Atualiza a navegação
};

// Lógica para voltar os itens
prevButton.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;  // Vai para o último item
    }
    updateNavigation();  // Atualiza a navegação
};

// Inicializa a navegação
updateNavigation();

// Menu de Hambúrguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');  // Alterna a classe 'show' para mostrar/esconder o menu
});
