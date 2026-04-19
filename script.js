/* Variáveis CSS para cores e fontes */
:root {
    --bg-color: #0d1a21; /* Um ciano muito escuro */
    --white-cold: #dbe7e9;
    --neon-magenta: #ff00ff;
    --neon-magenta-bright: #ff3cff;
    --neon-cyan: #00ffff;
    --neon-cyan-bright: #3cffff;
    --mono-font: 'Share Tech Mono', monospace;
    --pixel-font: 'Pixelify Sans', sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--white-cold);
    font-family: var(--mono-font);
    margin: 0;
    overflow: hidden; /* Impede a rolagem, a menos que necessário */
}

/* Efeito de Scanlines sobre todo o corpo */
body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
    background-size: 100% 4px;
    z-index: 100; /* Sobre a imagem de fundo, sob os elementos */
    pointer-events: none;
    opacity: 0.3;
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 200;
}

.system-status {
    font-size: 0.8rem;
    display: flex;
    gap: 10px;
}

.status-icons {
    display: flex;
    gap: 5px;
}

.logo {
    font-family: var(--pixel-font);
    font-size: 1.2rem;
    display: flex;
    gap: 5px;
}

.logo .kaio {
    color: var(--white-cold);
}

.logo .cesar-neon {
    color: var(--neon-magenta);
    text-shadow: 
        0 0 5px var(--neon-magenta),
        0 0 10px var(--neon-magenta),
        0 0 15px var(--neon-magenta);
}

.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Usar a foto do computador vintage baixada */
    background-image: url('crt_computer_fundo.png'); 
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    z-index: 90;
}

/* Sobreposição para escurecer a foto */
.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(13, 26, 33, 0.7); /* Mesma cor de fundo */
    z-index: 91;
}

.hero-content {
    position: relative;
    z-index: 102; /* Acima da sobreposição e scanlines */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.ready-text {
    font-size: 1rem;
    margin: 0;
}

.main-title {
    font-family: var(--pixel-font);
    font-size: 3rem;
    margin: 0;
    display: flex;
    gap: 10px;
    letter-spacing: -2px;
}

.main-title .kaio {
    color: #fff; /* Branco mais puro */
}

.main-title .cesar-neon {
    color: var(--neon-magenta-bright);
    text-shadow: 
        0 0 10px var(--neon-magenta-bright),
        0 0 20px var(--neon-magenta-bright),
        0 0 30px var(--neon-magenta-bright);
}

#typing-subtitutle {
    font-size: 1.2rem;
    margin: 0;
    height: 1.2em; /* Para manter o espaço */
    display: inline-block;
}

/* Cursor piscando */
#typing-subtitutle::after {
    content: "|";
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.inventory-button {
    background-color: var(--neon-cyan);
    color: #fff;
    border: none;
    padding: 15px 40px;
    font-family: var(--mono-font);
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
    box-shadow: 
        0 0 10px var(--neon-cyan),
        0 0 20px var(--neon-cyan),
        inset 0 0 10px rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    /* Forma trapezoidal/diagonal */
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%); 
}

.inventory-button:hover {
    background-color: #fff;
    color: var(--bg-color);
    text-shadow: none;
    box-shadow: 
        0 0 20px #fff,
        0 0 40px #fff;
}

.main-nav {
    margin-top: 20px;
}

.skill-tree {
    color: var(--neon-magenta);
    text-shadow: 0 0 5px var(--neon-magenta);
    cursor: pointer;
    margin: 0;
}

.skill-tree:hover {
    color: var(--neon-magenta-bright);
    text-shadow: 0 0 10px var(--neon-magenta-bright);
}

.phone-skin {
    position: absolute;
    bottom: 50px;
    left: 50px;
    width: 100px; 
    height: 180px;
    background-color: #000;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    z-index: 101; /* Sob a textura de scanlines do body */
    overflow: hidden;
}

.phone-screen {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: var(--bg-color);
}

.phone-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: color-burn; /* Para escurecer */
    opacity: 0.6;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px 20px;
    background-color: rgba(13, 26, 33, 0.9);
    z-index: 200;
    display: flex;
    justify-content: center;
}

.system-nav {
    display: flex;
    gap: 30px;
}

.system-nav button {
    background: none;
    border: none;
    color: var(--white-cold);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.system-nav button:hover {
    color: var(--neon-cyan);
    text-shadow: 0 0 10px var(--neon-cyan);
}
