const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { // Se o elemento está visível na tela
            entry.target.classList.add('show'); // Adiciona a classe que ativa a animação
            myObserver.unobserve(entry.target); // Remove a observação após exibir
        }
    });
});

// Seleciona todos os elementos com a classe "hidden"
const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element)); // Observa cada elemento
