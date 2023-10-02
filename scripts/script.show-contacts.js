const hexToString = hex => hex.match(/.{1,2}/g).map(b => String.fromCharCode(parseInt(b, 16))).join('');

const emailContact = {
  href: hexToString('6d61696c746f3a6f7376616c646f2e617572656c696f406f75746c6f6f6b2e636f6d'),
  text: hexToString('6f7376616c646f2e617572656c696f406f75746c6f6f6b2e636f6d'),
};

const imContact = {
  href: hexToString('74656c3a2b35353632393835313630363633'),
  text: hexToString('283632292039383531362d30363633'),
};

const prContact = {
  href: hexToString('68747470733a2f2f6769746875622e636f6d2f6f7376616c646f617572656c696f'),
  text: hexToString('68747470733a2f2f6769746875622e636f6d2f6f7376616c646f617572656c696f'),
};

const snsContact = {
  href: hexToString('68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f6f7376616c646f2d6175722543332541396c696f2d7269626569726f2d73696c7661'),
  text: hexToString('68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f6f7376616c646f2d6175722543332541396c696f2d7269626569726f2d73696c7661'),
};

const generateLink = ({ href, text }) => `
  <a href="${href}" target="_blank">
    ${text}
  </a>
`;

const generateLinkHtml = ([classList]) =>
  ({
    "E-mail": generateLink(emailContact),
    IM:  generateLink(imContact),
    PR:  generateLink(prContact),
    SNS:  generateLink(snsContact),
  }[classList]);

const handleClick = ({ target }) => {
  const card = target.parentElement;
  const content = target.nextElementSibling;

  card.classList.toggle("show");

  content.innerHTML = card.classList.contains("show")
    ? generateLinkHtml(card.classList)
    : '';
};

const titles = document.querySelectorAll(".contact .card-item h3");
titles.forEach((t) => t.addEventListener("click", handleClick));
