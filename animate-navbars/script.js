const sections = [1, 2, 3, 4, 5, 6];
const menuItems = ['home', 'service', 'about', 'contact'];

const body = document.querySelector('body');

sections.forEach(i => {
  const h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode('Logo'));

  const div = document.createElement('div');
  div.appendChild(h1);

  const ul = document.createElement('ul');

  menuItems.forEach(menuItem => {
    const a = document.createElement('a');
    a.appendChild(document.createTextNode(menuItem));
    a.href = `#${menuItem}`;
    a.title = menuItem;

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
