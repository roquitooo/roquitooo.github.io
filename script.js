const numFlowers = 5;
const container = document.body;

for (let i = 0; i < numFlowers; i++) {
    const flower = document.createElement('div');
    flower.innerHTML = '🌸';
    flower.classList.add('flower');
    container.appendChild(flower);
}