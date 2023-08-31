let imagem = document.querySelector('.imagem')
let time = 5000

window.addEventListener('load',start)

function start() {
    setInterval(() => {
        imagem.classList.toggle('foto1')
        
    }, time)
}