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

function loop() {
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
    
    setTimeout(loop, time);
}

document.addEventListener("DOMContentLoaded", () => {
    loop();
});

const style = document.createElement('style');
style.innerHTML = `
    .cursor { animation: blink 1s step-end infinite; }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
`;
document.head.appendChild(style);
