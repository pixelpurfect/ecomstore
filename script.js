let cart = [];
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    li.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.innerText = total.toFixed(2);
  cartCount.innerText = cart.length;
}

cartBtn.onclick = () => {
  cartModal.classList.toggle('hidden');
};

function closeCart() {
  cartModal.classList.add('hidden');
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  closeCart();
}
