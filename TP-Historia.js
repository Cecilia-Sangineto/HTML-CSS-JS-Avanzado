let video = document.querySelector('#video')

let botonPlay = document.querySelector('#play')
botonPlay.addEventListener('click', () =>{
    video.play()
})

let botonPausa = document.querySelector('#pausa')
botonPausa.addEventListener('click', () =>{
    video.pause()
})
