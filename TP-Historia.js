botonHistoria.addEventListener('click', () => {
    window.location.href="./TP-Historia.html";
})

botonJuego.addEventListener('click', () => {
    window.location.href="./TP-Juego.html";
})


let video = document.querySelector('#video')

let botonPlay = document.querySelector('#play')
botonPlay.addEventListener('click', () =>{
    video.play()
})

let botonPausa = document.querySelector('#pausa')
botonPausa.addEventListener('click', () =>{
    video.pause()
})
