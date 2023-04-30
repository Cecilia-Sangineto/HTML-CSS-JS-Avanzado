botonHistoria.addEventListener('click', () => {
    window.location.href="./historia.html";
})

botonJuego.addEventListener('click', () => {
    window.location.href="./juego.html";
})


logo.addEventListener('click', () => {
    window.location.href="./index.html";
})

let botonPlay = document.querySelector('#play')
botonPlay.addEventListener('click', () =>{
    video.play()
})

let botonPausa = document.querySelector('#pausa')
botonPausa.addEventListener('click', () =>{
    video.pause()
})

function secondsToHms(d) {
    d = Number(d);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var mDisplay = m + ":";
    var sDisplay = s;

    return  mDisplay + sDisplay;
}

let video = document.getElementById("video");
let counter = document.getElementById("contador");

window.setInterval(() => {
    tiempototal.textContent = secondsToHms(video.duration);
    counter.textContent = secondsToHms(video.currentTime);
}, 0);