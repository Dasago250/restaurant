const socials = ['instagram', 'twitter', 'tiktok', 'facebook', 'youtube', 'linkedin'];

function creationSocialIcons(parentNode) {
  for (let i = 0; i < socials.length; i += 1) {
    const social = document.createElement('i');
    social.classList.add('fa-brands');
    social.classList.add(`fa-${socials[i]}`);
    parentNode.appendChild(social);
  }
}

export default function contactPage() {
  const main = document.createElement('main');
  const title = document.createElement('h2');
  const contacts = document.createElement('div');
  const contactPhone = document.createElement('div');
  const phoneTitle = document.createElement('h3');
  const phoneText = document.createElement('p');
  const contactEmail = document.createElement('div');
  const emailTitle = document.createElement('h3');
  const emailText = document.createElement('p');
  const contactSocials = document.createElement('div');
  const socialsTitle = document.createElement('h3');
  const socialsList = document.createElement('div');

  main.classList.add('contact-page');
  contacts.classList.add('contacts');
  contactPhone.classList.add('contactPhone');
  contactEmail.classList.add('contactEmail');
  contactSocials.classList.add('contactSocials');
  contactPhone.classList.add('contactCell');
  contactEmail.classList.add('contactCell');
  contactSocials.classList.add('contactCell');

  title.textContent = 'Contact Us';
  phoneTitle.textContent = 'Phone';
  phoneText.textContent = '+99 123456789';
  contactPhone.appendChild(phoneTitle);
  contactPhone.appendChild(phoneText);

  emailTitle.textContent = 'Email';
  emailText.textContent = 'Restaurant@restaurant.com';
  contactEmail.appendChild(emailTitle);
  contactEmail.appendChild(emailText);

  socialsTitle.textContent = 'Social Media';
  creationSocialIcons(socialsList);
  socialsList.classList.add('socials');
  contactSocials.appendChild(socialsTitle);
  contactSocials.appendChild(socialsList);

  contacts.appendChild(contactPhone);
  contacts.appendChild(contactEmail);
  contacts.appendChild(contactSocials);

  main.appendChild(title);
  main.appendChild(contacts);

  return main;
}
