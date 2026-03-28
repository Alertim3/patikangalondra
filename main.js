// ----- Main JavaScript for Homepage -----
document.addEventListener('DOMContentLoaded', function() {
  // ----- Render Collections on Homepage -----
  const collectionsContainer = document.getElementById('collections');
  
  if (collectionsContainer) {
    Object.keys(collectionsData).forEach(categoryName => {
      let index = 0;
      const arr = collectionsData[categoryName];
      
      const section = document.createElement('div');
      section.className = 'collection';
      section.innerHTML = `
        <h2>${categoryName}</h2>
        <div class="carousel">
          <button class="arrow left"><i class="fas fa-chevron-left"></i></button>
          <div class="products"></div>
          <button class="arrow right"><i class="fas fa-chevron-right"></i></button>
        </div>
      `;
      
      const productsEl = section.querySelector('.products');
      const leftArrow = section.querySelector('.left');
      const rightArrow = section.querySelector('.right');
      
      // Render each product card
      arr.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product';
        card.innerHTML = `
          <img src="${prod.image}" alt="${prod.name}" loading="lazy">
          <strong>${prod.name}</strong>
          <span>${prod.price}</span>
          <button class="detail-btn">Shiko Detajet</button>
          <button class="add-to-cart-btn">Shto në Karte</button>
        `;
        
        // Fix: Add proper event listeners
        const detailBtn = card.querySelector('.detail-btn');
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        
        detailBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openProductDetail(prod);
        });
        
        addToCartBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          addToCart(prod);
        });
        
        productsEl.appendChild(card);
      });
      
      // Arrow functionality
      function updateArrows() {
        const totalProducts = arr.length;
        const visibleProducts = window.innerWidth < 576 ? 1 : 
                               window.innerWidth < 768 ? 2 : 
                               window.innerWidth < 992 ? 3 : 
                               window.innerWidth < 1200 ? 4 : 5;
        
        leftArrow.style.display = index > 0 ? 'flex' : 'none';
        rightArrow.style.display = index < totalProducts - visibleProducts ? 'flex' : 'none';
      }
      
      leftArrow.addEventListener('click', () => {
        index = Math.max(index - 1, 0);
        const translateX = index * 100 / 5; // 5 products in view
        productsEl.style.transform = `translateX(-${translateX}%)`;
        updateArrows();
      });
      
      rightArrow.addEventListener('click', () => {
        const totalProducts = arr.length;
        const visibleProducts = window.innerWidth < 576 ? 1 : 
                               window.innerWidth < 768 ? 2 : 
                               window.innerWidth < 992 ? 3 : 
                               window.innerWidth < 1200 ? 4 : 5;
        
        index = Math.min(index + 1, Math.max(0, totalProducts - visibleProducts));
        const translateX = index * 100 / 5;
        productsEl.style.transform = `translateX(-${translateX}%)`;
        updateArrows();
      });
      
      // Update arrows on window resize
      window.addEventListener('resize', updateArrows);
      updateArrows();
      
      collectionsContainer.appendChild(section);
    });
  }
  
  // ----- Scroll to Collections -----
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const collections = document.querySelector('.collections');
      if (collections) {
        collections.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
  
  // Initialize modals
  createModals();
});

// ----- Product Detail Functions -----
let currentProduct = null;

function openProductDetail(product) {
  currentProduct = product;
  
  // Create modal if it doesn't exist
  if (!document.getElementById('productModal').innerHTML) {
    createModals();
  }
  
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = product.price;
  
  // Reset form
  document.getElementById('modalSize').value = '';
  document.getElementById('modalColor').value = '';
  document.getElementById('modalQuantity').value = 1;
  
  document.getElementById('productModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function addToCartFromModal() {
  const size = document.getElementById('modalSize').value;
  const color = document.getElementById('modalColor').value;
  const quantity = parseInt(document.getElementById('modalQuantity').value) || 1;
  
  if (!size || !color) {
    showNotification('Ju lutem zgjidhni madhësinë dhe ngjyrën!');
    return;
  }
  
  if (currentProduct) {
    addToCart(currentProduct, size, color, quantity);
    closeModal('productModal');
  }
}

function openOrderModal() {
  const size = document.getElementById('modalSize').value;
  const color = document.getElementById('modalColor').value;
  
  if (!size || !color) {
    showNotification('Ju lutem zgjidhni madhësinë dhe ngjyrën!');
    return;
  }
  
  closeModal('productModal');
  document.getElementById('orderModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// ----- Order Functions -----
function submitOrder() {
  const name = document.getElementById('inputName').value;
  const surname = document.getElementById('inputSurname').value;
  const city = document.getElementById('inputCity').value;
  const street = document.getElementById('inputStreet').value;
  const phone = document.getElementById('inputPhone').value;
  
  if (!name || !surname || !city || !street || !phone) {
    showNotification('Ju lutem plotësoni të gjitha fushat e detyrueshme!');
    return;
  }
  
  // Validate phone number
  const phoneRegex = /^[+]?[0-9\s\-\(\)]{8,}$/;
  if (!phoneRegex.test(phone)) {
    showNotification('Ju lutem shkruani një numër telefoni të vlefshëm!');
    return;
  }
  
  // Show loading
  document.querySelector('.loading').style.display = 'flex';
  
  // Simulate order processing
  setTimeout(() => {
    document.querySelector('.loading').style.display = 'none';
    closeModal('orderModal');
    document.getElementById('successModal').style.display = 'flex';
    
    // Reset form
    ['inputName', 'inputSurname', 'inputCity', 'inputStreet', 'inputPhone', 'inputEmail', 'inputComment']
      .forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
      });
    
    // Clear cart after successful order
    clearCart();
    
    // Generate random order number
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    const orderNumberElement = document.getElementById('orderNumber');
    if (orderNumberElement) {
      orderNumberElement.textContent = orderNumber;
    }
    
    // Close success modal after 4 seconds
    setTimeout(() => {
      closeModal('successModal');
    }, 4000);
  }, 2000);
}

// ----- Modal Utility Functions -----
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ['productModal', 'orderModal', 'successModal'].forEach(modalId => {
      closeModal(modalId);
    });
    
    // Also close cart modal
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
      cartModal.classList.remove('show');
    }
  }
});

// ----- Create Modal HTML -----
function createModals() {
  // Product Modal
  const productModal = document.getElementById('productModal');
  if (productModal && !productModal.innerHTML) {
    productModal.innerHTML = `
      <div class="product-modal">
        <button class="close" onclick="closeModal('productModal')">&times;</button>
        <div class="product-layout">
          <img id="modalImg" class="modal-image" alt="Product Image">
          <div class="product-info">
            <h2 id="modalName"></h2>
            <p class="price" id="modalPrice"></p>
            <div class="transport-banner">
              <i class="fas fa-shipping-fast"></i>
              <p>Transporti Falas</p>
            </div>
            <label class="field-label">Madhësia</label>
            <select id="modalSize" class="field-control">
              <option value="">Zgjidh madhësinë</option>
              <option>38</option><option>39</option><option>40</option>
              <option>41</option><option>42</option><option>43</option>
              <option>44</option><option>45</option>
            </select>
            <label class="field-label">Ngjyra</label>
            <select id="modalColor" class="field-control">
              <option value="">Zgjidh ngjyrën</option>
              <option>E Bardhë</option><option>E Zezë</option>
              <option>Gri</option><option>Blu</option>
              <option>E Kuqe</option><option>Jeshile</option>
            </select>
            <label class="field-label">Sasia</label>
            <input type="number" id="modalQuantity" min="1" max="10" value="1" class="field-control">
            <button onclick="addToCartFromModal()" class="primary-btn" style="background: linear-gradient(135deg, #e63946, #ff6b6b);">
              <i class="fas fa-cart-plus"></i> Shto në Karte
            </button>
            <button onclick="openOrderModal()" class="primary-btn">
              <i class="fas fa-shopping-cart"></i> Porosit Tani
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  // Order Modal
  const orderModal = document.getElementById('orderModal');
  if (orderModal && !orderModal.innerHTML) {
    orderModal.innerHTML = `
      <div class="order-box">
        <button class="close" onclick="closeModal('orderModal')">&times;</button>
        <h2 style="display: flex; align-items: center; gap: 10px; margin-bottom: 30px;">
          <i class="fas fa-truck"></i> Detajet e Transportit
        </h2>
        <input id="inputName" placeholder="Emri *" class="field-control" required>
        <input id="inputSurname" placeholder="Mbiemri *" class="field-control" required>
        <input id="inputCity" placeholder="Qyteti *" class="field-control" required>
        <input id="inputStreet" placeholder="Rruga dhe numri *" class="field-control" required>
        <input id="inputPhone" placeholder="Numri i Telefonit *" class="field-control" type="tel" required>
        <input id="inputEmail" placeholder="Email (opsional)" class="field-control" type="email">
        <textarea id="inputComment" placeholder="Koment shtesë për porosinë..." class="field-control textarea"></textarea>
        <div style="margin-top: 25px; padding: 20px; background: #f8f9fa; border-radius: 12px;">
          <p style="margin: 0; font-size: 14px; color: #666; display: flex; align-items: flex-start;">
            <i class="fas fa-info-circle" style="margin-right: 10px; margin-top: 2px;"></i>
            Porosia do të përpunohet brenda 24 orëve. Do të kontaktoheni për konfirmim.
          </p>
        </div>
        <button onclick="submitOrder()" class="primary-btn">
          <i class="fas fa-paper-plane"></i> Dërgo Porosinë
        </button>
      </div>
    `;
  }
  
  // Success Modal
  const successModal = document.getElementById('successModal');
  if (successModal && !successModal.innerHTML) {
    successModal.innerHTML = `
      <div class="success-box">
        <div style="font-size: 80px; color: #2ecc71; margin-bottom: 30px;">
          <i class="fas fa-check-circle"></i>
        </div>
        <h2>Porosia juaj është bërë me sukses!</h2>
        <p style="font-size: 18px; margin: 20px 0 30px;">Do të kontaktoheni në mënyrë të shpejtë për konfrim.</p>
        <p style="color: #666; margin-top: 20px; font-size: 16px;">
          <i class="fas fa-clock" style="margin-right: 8px;"></i> 
          Numri i porosisë: #<span id="orderNumber">${Math.floor(100000 + Math.random() * 900000)}</span>
        </p>
      </div>
    `;
  }
}

// Add to window object for global access
window.openProductDetail = openProductDetail;
window.addToCartFromModal = addToCartFromModal;
window.openOrderModal = openOrderModal;
window.submitOrder = submitOrder;
window.closeModal = closeModal;
window.createModals = createModals;