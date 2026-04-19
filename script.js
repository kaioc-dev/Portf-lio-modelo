// Configuração do Título Principal
const textPart1 = "KAIO "; 
const textPart2 = "CÉSAR";
let indexTitle = 0;

// Frases do subtítulo rotativo
const phrases = [
    "Desenvolvedor Mobile Web",
    "Especialista em Interfaces JS",
    "Focado em Mobile-First",
    "Pronto para codar."
];
let phraseIndex = 0;

// 1. Função que digita o Nome Principal (mantida intacta)
function typeMainTitle() {
    const p1 = document.getElementById('title-part1');
    const p2 = document.getElementById('title-part2');
    const cursorTitle = document.getElementById('cursor-title');
    const subtitle = document.getElementById('subtitle-glitch');

    if (!p1 || !p2) return;

    if (indexTitle < textPart1.length) {
        p1.textContent += textPart1.charAt(indexTitle);
        indexTitle++;
        setTimeout(typeMainTitle, 150);
    } else if (indexTitle < textPart1.length + textPart2.length) {
        let idx2 = indexTitle - textPart1.length;
        p2.textContent += textPart2.charAt(idx2);
        indexTitle++;
        setTimeout(typeMainTitle, 150);
    } else {
        if (cursorTitle) cursorTitle.style.display = 'none';
        
        // Exibe o subtítulo e inicia a rotação
        if (subtitle) {
            subtitle.style.opacity = "1";
            setTimeout(rotateSubtitle, 3000); // Troca a frase a cada 3 segundos
        }
    }
}

// 2. Função que rotaciona as frases do Glitch
function rotateSubtitle() {
    const subtitle = document.getElementById('subtitle-glitch');
    if (!subtitle) return;
    
    phraseIndex = (phraseIndex + 1) % phrases.length;
    
    // Atualiza o texto visual e o atributo data-text (necessário para o CSS do Glitch)
    subtitle.textContent = phrases[phraseIndex];
    subtitle.setAttribute('data-text', phrases[phraseIndex]);
    
    setTimeout(rotateSubtitle, 3000);
}

// Inicia ao carregar a página
window.onload = () => {
    document.getElementById('title-part1').textContent = "";
    document.getElementById('title-part2').textContent = "";
    document.getElementById('subtitle-glitch').style.opacity = "0"; // Esconde até o título terminar
    typeMainTitle();
};
