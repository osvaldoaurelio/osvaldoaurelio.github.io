const body = document.querySelector('body');

const sections = [1, 2, 3, 4, 5];
const menuItems = ['home', 'service', 'about', 'contact'];

sections.forEach(i => {
  const h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode('Logo'));

  const div = document.createElement('div');
  div.appendChild(h1);

  const ul = document.createElement('ul');

  menuItems.forEach(item => {
    const a = document.createElement('a');
    a.appendChild(document.createTextNode(item));
    a.href = `#${item}`;
    a.title = item;

    const li = document.createElement('li');
    li.appendChild(a);

    ul.appendChild(li);
  });

  const nav = document.createElement('nav');
  nav.appendChild(div);
  nav.appendChild(ul);

  const section = document.createElement('section');
  section.appendChild(nav);
  section.id = `navbar-${i}`;

  body.appendChild(section);
});
