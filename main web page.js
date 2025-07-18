const cart = {};
const cartItemsContainer = document.getElementById("cart-items");


const subtotalEl = document.getElementById("subtotal"); 



document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', function () {


    const productItem = this.closest('.product-item');

    const name = productItem.dataset.name;
    const price = parseFloat(productItem.dataset.price);  

    const size = productItem.dataset.size;


    const image = productItem.dataset.image;


 
    if (cart[name]) {
      cart[name].quantity += 1;
    } else {
      
      cart[name] = { name, price, size, image, quantity: 1 };
    }

    renderCart();
  });
});

function changeQuantity(name, delta) {
  if (cart[name]) {
    cart[name].quantity += delta;
    if (cart[name].quantity <= 0) { 

      delete cart[name];
    }
    renderCart();
  }
}

function renderCart() {
  cartItemsContainer.innerHTML = '';
  let subtotal = 0;

  Object.values(cart).forEach(item => {
    subtotal += item.price * item.quantity;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-info">

        <h3>${item.name}</h3>
        <p>${item.size}</p>

        <p>Rs ${item.price}/-</p>
        <div class="quantity-control">

          <button onclick="changeQuantity('${item.name}', -1)">-</button>
          <span class="quantity">${item.quantity}</span>

          <button onclick="changeQuantity('${item.name}', 1)">+</button>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  subtotalEl.textContent = subtotal.toFixed(2);


  
}
