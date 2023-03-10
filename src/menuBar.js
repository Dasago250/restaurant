export default function menuBar() {
  const header = document.createElement('header');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const aboutBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  const title = document.createElement('h1');
  const menuList = document.createElement('div');

  title.textContent = 'Restaurant';
  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  aboutBtn.textContent = 'About';
  contactBtn.textContent = 'Contact';
  reserveBtn.textContent = 'Reserve';

  homeBtn.classList.add('homeBtn');
  menuBtn.classList.add('menuBtn');
  aboutBtn.classList.add('aboutBtn');
  contactBtn.classList.add('contactBtn');
  reserveBtn.classList.add('reserveBtn');
  menuList.classList.add('menuList');

  menuList.appendChild(homeBtn);
  menuList.appendChild(menuBtn);
  menuList.appendChild(aboutBtn);
  menuList.appendChild(contactBtn);
  header.appendChild(menuList);
  header.appendChild(title);
  header.appendChild(reserveBtn);

  return header;
}
