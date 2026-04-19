// Configuração do Título Principal
const textPart1 = "KAIO";
const textPart2 = "CÉSAR";
let indexTitle = 0;

// Frases do subtítulo rotativo
const phrases = [
    "Desenvolvedor Mobile Web",
    "Especialista em Interfaces JS",
    "Focado em Mobile-First",
    "Pronto para codar."
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

// 1. Função que digita o Nome Principal
function typeMainTitle() {
    const p1 = document.getElementById('title-part1');
    const p2 = document.getElementById('title-part2');
    const cursorTitle = document.getElementById('cursor-title');

    if (indexTitle < textPart1.length) {
        p1.innerHTML += textPart1.charAt(indexTitle);
        indexTitle++;
        setTimeout(typeMainTitle, 150); // Velocidade da letra
    } else if (indexTitle === textPart1.length) {
        p1.innerHTML += "&nbsp;"; // Adiciona o espaço
        indexTitle++;
        setTimeout(typeMainTitle, 150);
    } else if (indexTitle <= textPart1.length + textPart2.length) {
        let idx2 = indexTitle - textPart1.length - 1;
        p2.innerHTML += textPart2.charAt(idx2);
        indexTitle++;
        setTimeout(typeMainTitle, 150);
    } else {
        // Quando terminar de digitar o nome, esconde o cursor de cima e inicia o de baixo
        cursorTitle.style.display = 'none';
        setTimeout(loopSubtitle, 500);
    }
}

// 2. Função que digita os subtítulos
function loopSubtitle() {
    isEnd = false;
    document.getElementById('typing-text').innerHTML = currentPhrase.join('') + "<span class='cursor'>_</span>";

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) i = 0;
        }
    }
    
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    
    setTimeout(loopSubtitle, time);
}

// Inicia todo o processo assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
    typeMainTitle();
});

// CSS gerado dinamicamente para o cursor piscar
const style = document.createElement('style');
style.innerHTML = `
    .cursor { animation: blink 1s step-end infinite; color: var(--neon-blue); }
    #cursor-title { color: var(--neon-pink); }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
`;
document.head.appendChild(style);
