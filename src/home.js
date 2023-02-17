// Function to create the main elements of the menu page
export default function homePage() {
  const main = document.createElement('main');
  const titleMessage = document.createElement('div');
  const title = document.createElement('h3');
  const message = document.createElement('p');
  const card = document.createElement('div');
  const scheduleCard = document.createElement('div');
  const scheduleTitle = document.createElement('h3');
  const scheduleContent = document.createElement('div');
  const scheduleContentP1 = document.createElement('p');
  const scheduleContentP2 = document.createElement('p');
  const locationCard = document.createElement('div');
  const locationTitle = document.createElement('h3');
  const locationContent = document.createElement('div');
  const locationContentP1 = document.createElement('p');
  const locationContentP2 = document.createElement('p');

  main.classList.add('home-page');
  titleMessage.classList.add('title-message');
  card.classList.add('card');
  // Title
  titleMessage.appendChild(title);
  titleMessage.appendChild(message);

  // Schedule
  scheduleCard.classList.add('schedule-card');
  scheduleContent.classList.add('schedule-content');
  scheduleContent.appendChild(scheduleContentP1);
  scheduleContent.appendChild(scheduleContentP2);
  scheduleCard.appendChild(scheduleTitle);
  scheduleCard.appendChild(scheduleContent);

  // Location
  locationCard.classList.add('location-card');
  locationContent.classList.add('location-content');
  locationContent.appendChild(locationContentP1);
  locationContent.appendChild(locationContentP2);
  locationCard.appendChild(locationTitle);
  locationCard.appendChild(locationContent);

  card.appendChild(scheduleCard);
  card.appendChild(locationCard);
  main.appendChild(titleMessage);
  main.appendChild(card);

  title.textContent = 'Welcome';
  message.textContent = 'Sit and Enjoy';
  scheduleTitle.textContent = 'Schedules';
  scheduleContentP1.textContent = 'Mon - Fri: 9am - 9pm';
  scheduleContentP2.textContent = 'Sat - Sun: 10am - 12pm';
  locationTitle.textContent = 'Location';
  locationContentP1.textContent = '9999 Long Ave';
  locationContentP2.textContent = 'Silver City, Codfish CA';

  return main;
}
