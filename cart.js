// ----- Cart Functionality -----
document.addEventListener('DOMContentLoaded', function() {
  // Create cart modal
  const cartModal = document.createElement('div');
  cartModal.className = 'cart-modal';
  cartModal.id = 'cartModal';
  cartModal.innerHTML = `
    <div class="cart-header">
      <h3><i class="fas fa-shopping-cart"></i> Karta Juaj</h3>
      <button class="close-cart">&times;</button>
    </div>
    <div class="cart-items" id="cartItemsContainer">
      <!-- Cart items will be loaded here -->
    </div>
    <div class="cart-total">
      <h4>Total:</h4>
      <div class="cart-total-price" id="cartTotalPrice">0 EURO</div>
    </div>
    <button class="checkout-btn" id="checkoutBtn">Paguaj</button>
  `;
  
  document.body.appendChild(cartModal);
  
  // Toggle cart modal
  const cartDropdown = document.querySelector('.cart-dropdown');
  const closeCartBtn = document.querySelector('.close-cart');
  
  if (cartDropdown) {
    cartDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
      updateCartModal();
      cartModal.classList.toggle('show');
    });
  }
  
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', function() {
      cartModal.classList.remove('show');
    });
  }
  
  // Close cart when clicking outside
  document.addEventListener('click', function(e) {
    if (!cartModal.contains(e.target) && !cartDropdown.contains(e.target)) {
      cartModal.classList.remove('show');
    }
  });
  
  // Close cart with Escape key is handled in main.js
  
  // Initialize cart modal
  updateCartModal();
});

// ----- Update Cart Modal -----
function updateCartModal() {
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartTotalPrice = document.getElementById('cartTotalPrice');
  
  if (!cartItemsContainer || !cartTotalPrice) return;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <p>Karta juaj është bosh</p>
      </div>
    `;
    cartTotalPrice.textContent = '0 EURO';
    return;
  }
  
  let total = 0;
  let itemsHTML = '';
  
  cart.forEach((item, index) => {
    const price = parseFloat(item.price.replace(',', '.').replace(' EURO', ''));
    const itemTotal = price * (item.quantity || 1);
    total += itemTotal;
    
    itemsHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-details">${item.size} | ${item.color} | Sasia: ${item.quantity || 1}</div>
          <div class="cart-item-price">${item.price}</div>
        </div>
        <button class="remove-item" data-index="${index}">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
  });
  
  cartItemsContainer.innerHTML = itemsHTML;
  cartTotalPrice.textContent = `${total.toFixed(2)} EURO`;
  
  // Add event listeners to remove buttons
  cartItemsContainer.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      removeFromCart(index);
    });
  });
  
  // Add checkout functionality
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.onclick = function() {
      if (cart.length === 0) {
        showNotification('Karta juaj është bosh!');
        return;
      }
      
      document.getElementById('cartModal').classList.remove('show');
      document.getElementById('orderModal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };
  }
}

// Make updateCartModal globally accessible
window.updateCartModal = updateCartModal;