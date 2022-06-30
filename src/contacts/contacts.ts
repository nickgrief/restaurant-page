import './style.css';

const contacts = [
  {
    name: 'Boss',
    phone: '8-345-942-23-64',
  },
  {
    name: 'Secretary',
    phone: '5-513-161-12-42',
  },
  {
    name: "Secretary's kitten",
    phone: 'purr-purr-meaow-purr-meaow',
  },
];

export function show(parent: HTMLElement) {
  createMain(parent);
}

function createMain(parent: HTMLElement) {
  const main = document.createElement('div');
  main.classList.toggle('main');

  const header = document.createElement('h1');
  header.classList.toggle('header');
  header.textContent = 'Contacts:';
  main.appendChild(header);

  const contactList = document.createElement('ul');
  contactList.classList.toggle('contact-list');
  for (let contact of contacts) {
    const contactItem = document.createElement('li');
    contactItem.classList.toggle('contact-item');

    const name = document.createElement('p');
    name.classList.toggle('contact-name');
    name.textContent = contact.name + ':';
    contactItem.appendChild(name);

    const phone = document.createElement('p');
    phone.classList.toggle('contact-phone');
    phone.textContent = contact.phone;
    contactItem.appendChild(phone);

    contactList.appendChild(contactItem);
  }
  main.appendChild(contactList);

  parent.appendChild(main);
}
