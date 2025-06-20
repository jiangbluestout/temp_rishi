function handleATCEvent(variantID, quantity = 1, properties = {}) {
  if (!variantID || quantity <= 0) {
    console.error("Invalid variant ID or quantity.");
    return;
  }

  const payload = {
    items: [
      {
        id: variantID,
        quantity: quantity,
        properties: properties 
      }
    ]
  };

  console.log("Adding to cart:", payload);

  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(response => response.json()).then(body => {
    if (body.items) {
      // ORDER HERE MATTERS
      // Shopify adds new items to the top.
      const newItems = body.items;
      const cartItems = this.cart.items;
      if (window.dataLayer) {
        const value = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.reduce)(newItems, (totalPrice, item) => {
          return totalPrice + (item.final_price / 100 || 0);
        }, 0);
        window.dataLayer.push({
          ecommerce: null
        });
        window.dataLayer.push({
          event: "add_to_cart",
          ecommerce: {
            currency: "USD",
            value,
            items: newItems.map(item => this.gtagItemFromLine(item, item.quantity))
          },
          button
        });
      }

      // need to add the discount code to the cart checout event

      // Add back in unique cart items
      for (let i = 0; i < newItems.length; i++) {
        const newItem = newItems[i];
        const cartItem = cartItems.find(item => item.key == newItem.key);
        if (cartItem) {
          cartItem.quantity = newItem.quantity;
        } else {
          cartItems.unshift(newItem);
        }
      }
      this.pendingAddVariantId = null;
      this.cart = {
        ...this.cart,
        ...this.calculateItems(cartItems)
      };
      if (
        typeof Rebuy !== "undefined"
      ) {
        Rebuy.Cart.setCart(JSON.parse(JSON.stringify(this.cart)));
      }
      let klaviyoCartData = {
        total_price: this.cart.total_price / 100,
        $value: this.cart.total_price / 100,
        total_discount: this.cart.total_discount,
        original_total_price: this.cart.original_total_price / 100,
        items: this.cart.items,
        item: newItems[0]
      };

      // klaviyo tracking
      if (_learnq) {
        _learnq.push(["track", "Added to Cart", klaviyoCartData]);
      }
      if (openCart) {
        this.setMiniCartOpen(true);
      }
    } else if (body.description) {
      alert(body.description);
      throw new Error(body.description);
    }
    if (openCart) {
      this.setMiniCartOpen(true);
    }
  }).catch(error => {
    this.pendingAddVariantId = null;
    throw error;
  });
}