import './reset.css';
import './style.css';

const body = document.querySelector('body');
const hello = document.createElement('h1');
hello.textContent = 'Hello!';
body?.appendChild(hello);
