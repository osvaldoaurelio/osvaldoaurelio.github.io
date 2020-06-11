const rock = document.querySelector('.footer-images .rock');
const paper = document.querySelector('.footer-images .paper');
const scissors = document.querySelector('.footer-images .scissors');

const human = document.querySelector('.main-animate .human');
const cpu = document.querySelector('.main-animate .cpu');

const humanScores = document.querySelector('.main-board .human');
const htmlResult = document.querySelector('.main-board .result p');
const cpuScores = document.querySelector('.main-board .cpu');
const resetScores = document.querySelector('.footer-actions a');

const classImages = ['rock', 'paper', 'scissors'];

let humanWon = 0;
let cpuWon = 0;

const cpuMove = () => {
  const cpuImage = classImages[Math.floor(Math.random() * 3)];

  cpu.classList.add(cpuImage);

  return cpuImage;
}

const humanMove = humanImage => {
  human.classList.add(humanImage);

  const cpuImage = cpuMove();

  const cpuIndex = classImages.indexOf(cpuImage);
  const humanIndex = classImages.indexOf(humanImage);

  const result = (humanIndex == cpuIndex)
    ? { i: 0, class: 'draw' }
    : cpuIndex == 0 && humanIndex == 1 || cpuIndex == 1 && humanIndex == 2 || cpuIndex == 2 && humanIndex == 0
      ? { i: 1, class: 'win' }
      : { i: -1, class: 'lose' };

  if (result.i > 0) humanScores.innerHTML = ++humanWon;
  if (result.i < 0) cpuScores.innerHTML = ++cpuWon;

  htmlResult.classList.remove('draw', 'win', 'lose')
  htmlResult.classList.add(result.class)

  setTimeout(() => {
    human.classList.remove(humanImage);
    cpu.classList.remove(cpuImage);
  }, 1000);
}

rock.addEventListener('click', () => humanMove('rock'));
paper.addEventListener('click', () => humanMove('paper'));
scissors.addEventListener('click', () => humanMove('scissors'));

resetScores.addEventListener('click', () => {
  humanScores.innerHTML = cpuScores.innerHTML = humanWon = cpuWon = 0;
  htmlResult.classList.remove('draw', 'win', 'lose')
});
