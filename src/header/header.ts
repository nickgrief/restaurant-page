import './style.css';

const tabNames = ['Home', 'Menu', 'Contacts'];

export function show(parent: HTMLElement) {
  const header = document.createElement('header');
  // header.classList.toggle('header');

  const name = document.createElement('h1');
  name.classList.toggle('name');
  name.textContent = 'Ice Cweam De-luxe :3';
  header.appendChild(name);

  const slogan = document.createElement('p');
  slogan.classList.toggle('slogan');
  slogan.textContent = '=^..^= Be cute or be cuten =^..^=';
  header.appendChild(slogan);

  const tabs = document.createElement('ul');
  tabs.classList.toggle('tab-list');
  for (let tabName of tabNames) {
    const tab = document.createElement('li');
    tab.classList.toggle('tab-list-item');
    const link = document.createElement('button');
    link.textContent = tabName;
    tab.appendChild(link);
    tabs.appendChild(tab);
  }
  header.appendChild(tabs);

  parent.appendChild(header);
}
