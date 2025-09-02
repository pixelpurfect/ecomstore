let cart = [];
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  openCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price}`;
    li.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

function openCart() {
  cartModal.classList.add('show');
}

function closeCart() {
  cartModal.classList.remove('show');
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("Thanks for your purchase!");
  cart = [];
  updateCart();
  closeCart();
}

cartBtn.addEventListener('click', openCart);
