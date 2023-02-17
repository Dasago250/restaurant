import menuBar from './menuBar';
import homePage from './home';
import menuPage from './menu';

const content = document.querySelector('.content');

content.appendChild(menuBar());
content.appendChild(menuPage());
