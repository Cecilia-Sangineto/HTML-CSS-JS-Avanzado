botonHistoria.addEventListener('click', () => {
    window.location.href="./historia.html";
})

botonJuego.addEventListener('click', () => {
    window.location.href="./juego.html";
})

logo.addEventListener('click', () => {
    window.location.href="./index.html";
})

// Puzzle 

const imagenes = [
    'imagen-0', 'imagen-1', 'imagen-2',
];

const puzzle = document.getElementById('puzzle');
const piezas = document.getElementById('piezas');
const mensaje = document.getElementById('mensaje');

let terminado = imagenes.length;

while (imagenes.length) {
    const index = Math.floor(Math.random() * imagenes.length);
    const div = document.createElement('div');
    div.className = 'pieza';
    div.id = imagenes[index];
    div.draggable = true;
    div.style.backgroundImage = `url("recursos/${imagenes[index]}.png")`;
    piezas.appendChild(div);
    imagenes.splice(index, 1);
}

for (let i = 0; i < terminado; i++) {
    const div = document.createElement('div');
    div.className = 'placeholder';
    div.dataset.id = i;
    div.innerText = "Arrastre y suelte la imagen aquí."
    puzzle.appendChild(div);
}


piezas.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
});

puzzle.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});

puzzle.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});

puzzle.addEventListener('drop', e => {
    e.target.classList.remove('hover');

    const id = e.dataTransfer.getData('id');
    const numero = id.split('-')[1];

    if (e.target.dataset.id === numero) {
        e.target.appendChild(document.getElementById(id));

        terminado--;

        if (terminado === 0) {
            document.body.classList.add('ganaste');
        }
    }
});