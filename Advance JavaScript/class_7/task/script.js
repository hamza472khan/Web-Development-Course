//fake store api

let allProducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Toggle cart panel
document.getElementById('cartBtn').addEventListener('click', () => {
  const cartPanel = document.getElementById('cartPanel');
  cartPanel.classList.toggle('active');
});

// Close cart panel when clicking outside
document.addEventListener('click', (e) => {
  const cartWrapper = document.querySelector('.cart-icon-wrapper');
  if (!cartWrapper.contains(e.target)) {
    document.getElementById('cartPanel').classList.remove('active');
  }
});

// Add to cart function
function addToCart(productId) {
  const product = allProducts.find(p => p.id === productId);
  
  if (product) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
    
    saveCart();
    updateCartUI();
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
  updateCartCount();
  displayCartItems();
}

// Update cart count
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cartCount').textContent = count;
}

// Display cart items in the panel
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-message">Your cart is empty</p>';
    document.getElementById('cartTotal').textContent = 'Total: $0.00';
    return;
  }
  
  let total = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item-row';
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <img src="${item.image}" alt="${item.title}">
        <div class="item-details">
          <p class="item-title">${item.title.substring(0, 30)}...</p>
          <p class="item-price">$${item.price.toFixed(2)} x ${item.quantity}</p>
        </div>
      </div>
      <div class="item-controls">
        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
        <span class="qty-display">${item.quantity}</span>
        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `;
    
    cartItemsContainer.appendChild(cartItem);
  });
  
  document.getElementById('cartTotal').textContent = `Total: $${total.toFixed(2)}`;
}

// Update item quantity
function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity += change;
    
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartUI();
    }
  }
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

// Clear cart
document.getElementById('clearCartBtn').addEventListener('click', () => {
  cart = [];
  saveCart();
  updateCartUI();
});

// Fetch products
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    allProducts = data;
    
    // Create cards for each item
    const container = document.querySelector('.container');
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';
    
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      card.innerHTML = `
        <h3>${item.title}</h3>
        <img src="${item.image}" alt="${item.title}">
        <p>Price: $${item.price}</p>
        <p>Category: ${item.category}</p>
        <button class="add-to-cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
      `;
      
      productContainer.appendChild(card);
    });
    
    container.appendChild(productContainer);
    
    // Initialize cart UI
    updateCartUI();
  });
