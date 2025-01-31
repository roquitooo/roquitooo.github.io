const numFlowers = 20;
const container = document.body;

for (let i = 0; i < numFlowers; i++) {
    const flower = document.createElement('div');
    flower.innerHTML = '🌸';
    flower.classList.add('flower');
    
    // Posiciones y tamaños aleatorios
    flower.style.top = `${Math.random() * 100}%`;
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.fontSize = `${Math.random() * 2 + 1}rem`;
    flower.style.animationDuration = `${Math.random() * 5 + 3}s`;
    
    container.appendChild(flower);
}
