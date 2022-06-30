import * as index from '../index';
import icImage from './icecream.jpg';

const bp = (point: string, color: string) => {
  return {
    point,
    color,
  };
};

const bps = [
  bp('Sugar and milk? What more can I ask?', 'deeppink'),
  bp("If you're cute come right in!", 'mediumseagreen'),
  bp("If you're not... You're cute!", 'orange'),
  bp(
    'So, just come here and eat icecream. Nothing can go wrong...',
    'indianred'
  ),
  bp(
    'JoJo is the best anime. If you agree then come eat icecream with me!',
    'fuchsia'
  ),
  bp(
    'Anyway... I need to fill some space. BOBOBOBOLLALALALKEKEKEKKERARARARA',
    'indigo'
  ),
];

export function show() {
  index.createHeader();
  createMain();
}

function createMain() {
  const main = document.createElement('main');

  const icecream = document.createElement('img');
  icecream.classList.toggle('icecream');
  icecream.src = icImage;
  icecream.title = 'Photo by Benjamín Hazael Rojas García';
  main.appendChild(icecream);

  const holder = document.createElement('div');

  const banner = document.createElement('p');
  banner.classList.toggle('banner');
  banner.textContent = 'What people say about our restaurant:';
  holder.appendChild(banner);

  // I've had a stroke while naming things. Let's just never look here m'kay?
  const bullet = document.createElement('ul');
  bullet.classList.toggle('bullet-points');
  for (let p of bps) {
    const bpoint = document.createElement('li');
    bpoint.classList.toggle('bullet-point');
    bpoint.textContent = p.point;
    bpoint.style.color = p.color;
    bullet.appendChild(bpoint);
  }
  holder.appendChild(bullet);

  main.appendChild(holder);

  index.body.appendChild(main);
}
