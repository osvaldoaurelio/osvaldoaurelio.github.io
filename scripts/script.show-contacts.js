const hexToStr = h => h.match(/.{1,2}/g).map(b => String.fromCharCode(parseInt(b, 16))).join('');

const contacts = {
  email: {
    href: hexToStr('6d61696c746f3a6f7376616c646f2e617572656c696f406f75746c6f6f6b2e636f6d'),
    text: hexToStr('6f7376616c646f2e617572656c696f406f75746c6f6f6b2e636f6d'),
  },
  im: {
    href: hexToStr('74656c3a2b35353632393835313630363633'),
    text: hexToStr('283632292039383531362d30363633'),
  },
  pr: {
    href: hexToStr('68747470733a2f2f6769746875622e636f6d2f6f7376616c646f617572656c696f'),
    text: hexToStr('68747470733a2f2f6769746875622e636f6d2f6f7376616c646f617572656c696f'),
  },
  sns: {
    href: hexToStr('68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f6f7376616c646f2d6175722543332541396c696f2d7269626569726f2d73696c7661'),
    text: hexToStr('68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f6f7376616c646f2d6175722543332541396c696f2d7269626569726f2d73696c7661'),
  },
};

const generateLinkTo = ({ href, text }) => `
  <a href="${href}" target="_blank">
    ${text}
  </a>
`;

const handleClick = ({ target }) => {
  const classList = target.parentElement.classList;
  const content = target.nextElementSibling;

  classList.toggle('show');

  content.innerHTML = classList.contains('show')
    ? generateLinkTo(contacts[classList.item(0)])
    : '';
};

const titles = document.querySelectorAll('.contact .card-item h3');

titles.forEach((t) => t.addEventListener('click', handleClick));
