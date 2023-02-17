import menuBar from './menuBar';
import homePage from './home';
import menuPage from './menu';
import aboutPage from './about';

const content = document.querySelector('.content');

content.appendChild(menuBar());
content.appendChild(homePage());

content.addEventListener('click', (e) => {
  switch (e.target.className) {
    case 'homeBtn':
      content.removeChild(content.lastElementChild);
      content.appendChild(homePage());
      break;
    case 'menuBtn':
      content.removeChild(content.lastElementChild);
      content.appendChild(menuPage());
      break;
    case 'aboutBtn':
      content.removeChild(content.lastElementChild);
      content.appendChild(aboutPage());
      break;
    case 'contactBtn':
      break;
    default:
      break;
  }
});
