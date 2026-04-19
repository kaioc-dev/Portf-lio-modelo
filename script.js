// Configuração do Título Principal
const textPart1 = "KAIO "; // Espaço incluído aqui para evitar bugs
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

    // Trava de segurança para garantir que o elemento existe na tela
    if (!p1 || !p2) return;

    if (indexTitle < textPart1.length) {
        // Digita a parte branca
        p1.textContent += textPart1.charAt(indexTitle);
        indexTitle++;
        setTimeout(typeMainTitle, 150);
    } else if (indexTitle < textPart1.length + textPart2.length) {
        // Digita a parte neon
        let idx2 = indexTitle - textPart1.length;
        p2.textContent += textPart2.charAt(idx2);
        indexTitle++;
        setTimeout(typeMainTitle, 150);
    } else {
        // Esconde o cursor principal e inicia o subtítulo
        if (cursorTitle) cursorTitle.style.display = 'none';
        setTimeout(loopSubtitle, 500);
    }
}

// 2. Função que digita os subtítulos
function loopSubtitle() {
    isEnd = false;
    const typingText = document.getElementById('typing-text');
    
    if (!typingText) return;

    typingText.innerHTML = currentPhrase.join('') + "<span class='cursor'>_</span>";

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

// Inicia apenas quando a página carregar por completo (evita bugs no mobile)
window.onload = () => {
    // Garante que o texto esteja zerado ao recarregar a página
    document.getElementById('title-part1').textContent = "";
    document.getElementById('title-part2').textContent = "";
    typeMainTitle();
};
