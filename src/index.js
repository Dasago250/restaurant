import menuBar from './menuBar';
import homePage from './home';

const content = document.querySelector('.content');

content.appendChild(menuBar());
content.appendChild(homePage());
