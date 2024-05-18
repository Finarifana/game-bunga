document.getElementById('plant-button').addEventListener('click', plantFlower);

function plantFlower() {
    const garden = document.getElementById('garden');
    
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    const petal1 = document.createElement('div');
    petal1.classList.add('petal');
    petal1.style.top = '0';
    petal1.style.left = '50%';
    petal1.style.transform = 'translateX(-50%)';
    
    const petal2 = document.createElement('div');
    petal2.classList.add('petal');
    petal2.style.top = '50%';
    petal2.style.left = '0';
    petal2.style.transform = 'translateY(-50%)';
    
    const petal3 = document.createElement('div');
    petal3.classList.add('petal');
    petal3.style.top = '50%';
    petal3.style.right = '0';
    petal3.style.transform = 'translateY(-50%)';
    
    const petal4 = document.createElement('div');
    petal4.classList.add('petal');
    petal4.style.top = '100%';
    petal4.style.left = '50%';
    petal4.style.transform = 'translate(-50%, -100%)';
    
    const stem = document.createElement('div');
    stem.classList.add('stem');
    
    flower.appendChild(petal1);
    flower.appendChild(petal2);
    flower.appendChild(petal3);
    flower.appendChild(petal4);
    flower.appendChild(stem);
    
    garden.appendChild(flower);
}
