// Texto a ser digitado
const subtitleText = "Desenvolvedor Mobile We_";
const subtitleElement = document.getElementById('typing-subtitutle');
let index = 0;

// Função para o efeito de digitação (Typewriter)
function typeWriter() {
    if (index < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(index);
        index++;
        // Velocidade de digitação: 100ms por caractere
        setTimeout(typeWriter, 100); 
    } else {
        // Manter o cursor piscando, mas parar de digitar
    }
}

// Inicia o efeito de digitação ao carregar a página
typeWriter();
