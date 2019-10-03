const imgPiedra = document.querySelector('.images img[alt="Piedra"]')
const imgPapel = document.querySelector('.images img[alt="Papel"]')
const imgTijera = document.querySelector('.images img[alt="Tijera"]')
const animateHumano = document.getElementById('animate-humano')
const animateCpu = document.getElementById('animate-cpu')
const boardHumano = document.getElementById('board-humano')
const resultado = document.getElementById('board-resultado')
const boardCpu = document.getElementById('board-cpu')
let ganhou = 0, perdeu = 0
const cpuJogada = () => {
  const cpuJogadaNumber = Math.floor(Math.random() * 3)
  const cpuImgClass = (cpuJogadaNumber == 0) ? 'animate-cpu-piedra-hover' :
  (cpuJogadaNumber == 1) ? 'animate-cpu-papel-hover' : 'animate-cpu-tijera-hover'
  animateCpu.classList.add(cpuImgClass)
  return {'id': cpuJogadaNumber, 'class': cpuImgClass}
}
const humanJogada = (humanoJ) => {
  animateHumano.classList.add(humanoJ.class)
  const cpuJ = cpuJogada()
  const result = (humanoJ.id == cpuJ.id) ? 'Ocorreu um empate' :
    ( (cpuJ.id == 0 && humanoJ.id == 1) 
    || (cpuJ.id == 1 && humanoJ.id == 2)
    || (cpuJ.id == 2 && humanoJ.id == 0) )
    ? 'Você ganhou o jogo :) !!!' : 'Você perdeu o jogo :('
  if (result == 'Você ganhou o jogo :) !!!') boardHumano.innerHTML = ++ganhou
  if (result == 'Você perdeu o jogo :(') boardCpu.innerHTML = ++perdeu
  resultado.innerHTML = result
  setTimeout(() => {
    animateHumano.classList.remove(humanoJ.class) 
    animateCpu.classList.remove(cpuJ.class)
    resultado.innerHTML = ''
  }, 1000)
}
imgPiedra.addEventListener('click', () => humanJogada({'id': 0, 'class': 'animate-humano-piedra-hover'}) ) 
imgPapel.addEventListener('click', () => humanJogada({'id': 1, 'class': 'animate-humano-papel-hover'}) ) 
imgTijera.addEventListener('click', () => humanJogada({'id': 2, 'class': 'animate-humano-tijera-hover'}) ) 
