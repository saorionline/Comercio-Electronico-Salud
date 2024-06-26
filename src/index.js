/* import "./assets/style.css" */ 
const url = "https://api.escuelajs.co/api/v1/products?offset=5&limit=10";

const appElement = document.getElementById("app");

!(async function (){
  const response = await fetch(url);
  const products = await response.json();

  const nodeArray = products.map((product) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('items');
    //Loop through product images array
    product.images.forEach((imageUrl, index) => {
      if (index === 1) { //Check the position of the functional image
        const image = document.createElement('img');
        image.className = 'img';
        image.src = `${imageUrl}`;
       // image.src = imageUrl.slice(1, -1); // Remove first and last character (assuming quotes)
        image.alt = "New Product"; // Add alt attribute
      //Append image to container (optional)
      imageContainer.appendChild(image);
      }
    });

    //Wrap images and priceAndTitle (if using container)
    const card = document.createElement('div');
    card.classList.add('card'); // Add the class "card"
    // Future implementation con Tailwind card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
    card.appendChild(imageContainer || image );
    return card;
  })
  appElement.append(...nodeArray);
})();