// Function Factory to create each product with images
const product = (name, price, imgsrc) => {
  const productImage = new Image(500, 333);
  productImage.src = imgsrc;

  return { name, price, productImage };
};

// List of products
const items = [
  product('Product 1', '$5.00', '../src/img/products/Product1.jpg'),
  product('Product 2', '$5.00', '../src/img/products/Product2.jpg'),
  product('Product 3', '$5.00', '../src/img/products/Product3.jpg'),
  product('Product 4', '$5.00', '../src/img/products/Product4.jpg'),
  product('Product 5', '$5.00', '../src/img/products/Product5.jpg'),
  product('Product 6', '$5.00', '../src/img/products/Product6.jpg'),
  product('Product 7', '$5.00', '../src/img/products/Product7.jpg'),
  product('Product 8', '$5.00', '../src/img/products/Product8.jpg'),
  product('Product 9', '$5.00', '../src/img/products/Product9.jpg'),
  product('Product 10', '$5.00', '../src/img/products/Product10.jpg'),
];

// Function to create the main part of the menu page
export default function menuPage() {
  const main = document.createElement('main');
  const carte = document.createElement('div');
  const title = document.createElement('h2');
  const products = document.createElement('div');

  main.classList.add('menu-page');
  carte.classList.add('carte');
  products.classList.add('products');

  carte.appendChild(title);
  carte.appendChild(products);
  main.appendChild(carte);

  // Create each card for each product with its respective images, name and price
  for (let i = 0; i < items.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(items[i].productImage);

    const textCard = document.createElement('div');
    textCard.classList.add('textCard');
    card.appendChild(textCard);

    const nameProduct = document.createElement('p');
    const priceProduct = document.createElement('p');
    textCard.appendChild(nameProduct);
    textCard.appendChild(priceProduct);
    nameProduct.textContent = items[i].name;
    priceProduct.textContent = items[i].price;

    products.appendChild(card);
  }

  title.textContent = 'Menu';

  return main;
}
