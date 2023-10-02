const body = document.querySelector("body");
const firstDiv = document.querySelector('body :nth-child(1)');
const secondDiv = document.querySelector('body :nth-child(2)');

const queryDate = location.search.replace(/[a-zA-Z\?=]/g, '').split('-').map(Number);

if(queryDate.length < 3) {
  body.style.fontSize = '3vw';
  firstDiv.innerHTML = 'Insert the date by passing a "query param" into URL';
  secondDiv.innerHTML = 'Use this format YYYY-MM-DD or YYYY-MM-DD-hh-mm';
} else {
  queryDate[1]--;

  const countFunction = () => {
    const finalDate = new Date(...queryDate);
    const initialDate = new Date();

    const totalFinalSeconds = finalDate.getTime() / 1000;
    const totalInitialSeconds = initialDate.getTime() / 1000;

    const diffTotalSeconds = totalFinalSeconds - totalInitialSeconds;

    if(diffTotalSeconds <= 0) {
      clearInterval(countFunction);
      firstDiv.innerHTML = '"Finished!"';
      return;
    }

    const diffDays = Math.floor(diffTotalSeconds / 24 / 60 / 60);
    const secondsWithoutDays = diffTotalSeconds - (diffDays * 24 * 60 * 60);

    const diffHours = Math.floor(secondsWithoutDays / 60 / 60);
    const secondsWithoutHours = secondsWithoutDays - (diffHours * 60 * 60);
    
    const diffMinutes = Math.floor(secondsWithoutHours / 60)
    const diffSeconds = Math.floor(secondsWithoutHours - (diffMinutes * 60));

    const seconds = diffSeconds > 9 ? diffSeconds : `0${diffSeconds}`;
    const minutes = diffMinutes > 9 ? diffMinutes : `0${diffMinutes}`;
    const hours = diffHours > 9 ? diffHours : `0${diffHours}`;
    const days = diffDays === 1 ? `${diffDays} day` : `${diffDays} days`;

    const counter = `${days} - ${hours}:${minutes}:${seconds}`;

    firstDiv.innerHTML = counter;   
  }
  
  secondDiv.innerHTML = 'Regressive Counter';
  
  setInterval(countFunction, 1000);
}
