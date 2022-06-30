import './reset.css';
import './style.css';

import * as header from './header/header';
import * as home from './home/home';
import * as menu from './menu/menu';

const body = document.querySelector('body')!;

show();

function show() {
  header.show(body);
  // home.show(body);
  menu.show(body);
}
