import './reset.css';
import './style.css';

import * as home from './home/home';
import * as menu from './menu/menu';

const tabNames = ['Home', 'Menu', 'Contacts'];

const body = document.querySelector('body')!;

show();

function show() {
  createHeader();
  menu.show(body);
  home.show(body);
}

export function createHeader() {
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

  body.appendChild(header);
}
