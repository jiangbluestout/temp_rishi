document.getElementById('cart-drawer__close').addEventListener('click', function () {
  // Fetch the cart data
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      // Update the cart-item-count element's text
      const cartItemCountElement = document.getElementById('cart-item-count');
      if (cartItemCountElement) {
        cartItemCountElement.textContent = cart.item_count || 0;
      }
    })
    .catch(error => console.error('Error fetching cart:', error));
});