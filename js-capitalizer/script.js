String.prototype.capitalize = function() {
  const phrase = this.toLowerCase();
  const isEmpty = !phrase.length;
  if(isEmpty) return phrase.valueOf();
  return phrase
    .split(' ')
    .map(word => 
      !word.length
        ? word
        : `${word[0].toUpperCase()}${word.slice(1, word.length)}`
    ).join(' ');
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const inputText = document.querySelector('#input-text').value;
  const inputTextCapitalized = inputText.capitalize();

  document.querySelector('#output-text').value = inputTextCapitalized;

  const code = document.querySelector('pre');

  code.innerHTML = code.innerHTML.slice(0, 1102)
  code.innerHTML += `

    <i yellow>"${inputText}"</i>.<i blue>capitalize</i><i white>();</i>

    >> <i yellow>"${inputTextCapitalized}"</i>
  `
});
