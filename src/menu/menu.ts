import './style.css';

const menuItem = (name: string, description: string, price: number) => {
  return {
    name,
    description,
    price,
  };
};

const menuItems = [
  menuItem(
    'Vanilla Icecweam',
    'Delicious valinna icecweam in a waffle cone',
    2
  ),
  menuItem(
    'Flavoured Icecweam',
    'Delicious flavoured icecweam in a waffle cone',
    3
  ),
  menuItem(
    'TripleMeaow Icecweam',
    'Three meaowingly tasty ice balls in a waffle cone',
    5
  ),
  menuItem(
    'Purr-purr Cheesecake',
    'Yammy good cheesecake for kittens who like to have fun',
    4
  ),
  menuItem('Kitty-coke', 'Sugary-sweet drink to keep your tummy happy', 2),
  menuItem('Literally a cat', 'Just a cat. A cute one. Be a good parent', 100),
];

export function show(parent: HTMLElement) {
  createMain(parent);
}

function createMain(parent: HTMLElement) {
  const main = document.createElement('div');
  main.classList.toggle('main');

  const header = document.createElement('h1');
  header.classList.toggle('header');
  header.textContent = 'Menu';
  main.appendChild(header);

  const menuList = document.createElement('ol');
  menuList.classList.toggle('menu-list');
  for (let item of menuItems) {
    const menuItem = document.createElement('li');
    menuItem.classList.toggle('menu-item');

    const name = document.createElement('p');
    name.classList.toggle('menu-item-name');
    name.textContent = item.name;
    menuItem.appendChild(name);

    const description = document.createElement('p');
    description.classList.toggle('menu-item-description');
    description.textContent = item.description;
    menuItem.appendChild(description);

    const price = document.createElement('p');
    price.classList.toggle('menu-item-price');
    price.textContent = item.price.toString() + '$';
    menuItem.appendChild(price);

    menuList.appendChild(menuItem);
  }
  main.appendChild(menuList);

  parent.appendChild(main);
}
