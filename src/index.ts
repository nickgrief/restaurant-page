import './reset.css';
import './style.css';

import * as header from './header/header';
import * as home from './home/home';
import * as menu from './menu/menu';
import * as contacts from './contacts/contacts';

const body = document.querySelector('body')!;

show(home.show);

function show(page: (parent: HTMLElement) => void) {
  while (body.hasChildNodes()) {
    body.removeChild(body.lastChild!);
  }
  header.show(body);
  // home.show(body);
  page(body);
}

export function onPageSwitch(pageName: string) {
  switch (pageName) {
    case 'Home':
      show(home.show);
      break;
    case 'Menu':
      show(menu.show);
      break;
    case 'Contacts':
      show(contacts.show);
      break;
    default:
      break;
  }
}
