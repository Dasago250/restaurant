export default function aboutPage() {
  const main = document.createElement('main');
  const title = document.createElement('h2');
  const text = document.createElement('p');
  main.classList.add('about-page');
  title.textContent = 'About Us';
  text.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

  main.appendChild(title);
  main.appendChild(text);

  return main;
}
