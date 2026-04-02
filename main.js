// ----- Store API (same origin as this site; server serves /api and static files) -----
// Stock and images are managed in /admin/ only. Orders go to POST /api/orders (Telegram on server).

// Cache for the currently opened product modal: { [size]: stock_qty }
let modalVariantStockBySize = {};
let modalVariantColor = '';
let modalStockLoaded = false;

const PLACEHOLDER_PRODUCT_IMAGE =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="#f0f0f0" width="400" height="400"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-family="system-ui,sans-serif" font-size="18">Shto foto në /admin/</text></svg>'
  );

const productImageById = {};

async function hydrateProductImagesFromApi() {
  productImageById = {};
  try {
    const res = await fetch('/api/store/product-images');
    if (!res.ok) return;
    const map = await res.json();
    if (map && typeof map === 'object') Object.assign(productImageById, map);
  } catch (_) {
    /* offline or server not running */
  }
}

function getProductImageUrl(productId) {
  if (productId == null) return PLACEHOLDER_PRODUCT_IMAGE;
  const fromAdmin = productImageById[productId];
  if (fromAdmin && String(fromAdmin).trim() !== '') return String(fromAdmin).trim();
  return PLACEHOLDER_PRODUCT_IMAGE;
}

async function fetchActiveVariantStock(productId, color) {
  if (!productId || !color) return null;
  try {
    const u =
      '/api/store/variant-stock?product_id=' +
      encodeURIComponent(productId) +
      '&color=' +
      encodeURIComponent(color);
    const res = await fetch(u);
    if (!res.ok) return null;
    const data = await res.json();
    const map = data.map && typeof data.map === 'object' ? data.map : {};
    const imageUrl = data.imageUrl ? String(data.imageUrl).trim() : '';
    return { map, imageUrl };
  } catch {
    return null;
  }
}

function isSizeInStock(size) {
  const key = String(size);
  if (!modalStockLoaded) return true; // don’t block user until stock is loaded
  return (modalVariantStockBySize?.[key] ?? 0) > 0;
}

// ----- Main JavaScript for Homepage -----
document.addEventListener('DOMContentLoaded', async function () {
  await hydrateProductImagesFromApi();

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
          <img src="${getProductImageUrl(prod.id)}" alt="${prod.name}" loading="lazy">
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
          openProductDetail(prod);
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

async function openProductDetail(product) {
  currentProduct = product;
  
  // Create modal if it doesn't exist
  if (!document.getElementById('productModal').innerHTML) {
    createModals();
  }
  
  document.getElementById('modalImg').src = getProductImageUrl(product.id);
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = product.price;
  
  // Build variant selectors from the product data
  modalVariantColor = product?.color ? String(product.color) : '';
  modalVariantStockBySize = {};
  modalStockLoaded = false;

  const modalSizeEl = document.getElementById('modalSize');
  const modalColorEl = document.getElementById('modalColor');
  const modalQuantityEl = document.getElementById('modalQuantity');

  // Size options from product.sizeRange
  if (modalSizeEl) {
    const sizes = Array.isArray(product?.sizeRange) ? product.sizeRange : [];
    modalSizeEl.innerHTML = `<option value="">Zgjidh madhësinë</option>` + sizes
      .map((s) => `<option value="${String(s)}">${String(s)}</option>`)
      .join('');
    modalSizeEl.value = '';
  }

  // Color options: one fixed color per product (matches product.color in data.js)
  if (modalColorEl) {
    const colorVal = modalVariantColor;
    modalColorEl.innerHTML = `<option value="">Zgjidh ngjyrën</option>` +
      (colorVal ? `<option value="${colorVal}">${colorVal}</option>` : '');
    modalColorEl.value = colorVal || '';
  }

  if (modalQuantityEl) modalQuantityEl.value = 1;

  // Load stock for this product + color (and admin image URL for this variant)
  if (modalVariantColor) {
    const variantData = await fetchActiveVariantStock(product.id, modalVariantColor);
    const stockMap = variantData?.map ?? {};
    modalVariantStockBySize = stockMap;
    modalStockLoaded = variantData != null;

    if (variantData?.imageUrl) {
      document.getElementById('modalImg').src = variantData.imageUrl;
    }

    if (modalStockLoaded && modalColorEl) {
      // Select first in-stock size, if available
      const sizes = Array.from(modalSizeEl?.options ?? []).map((o) => o.value).filter(Boolean);
      const firstInStock = sizes.find((size) => isSizeInStock(size));
      if (firstInStock) {
        modalSizeEl.value = firstInStock;
      }

      // Disable out-of-stock sizes
      if (modalSizeEl) {
        Array.from(modalSizeEl.options).forEach((opt) => {
          if (!opt.value) return; // placeholder
          const inStock = isSizeInStock(opt.value);
          opt.disabled = !inStock;
        });
      }

      if (!firstInStock) {
        showNotification('Ky produkt është aktualisht jashtë stokut për këtë ngjyrë.');
      }
    }
  }
  
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

  if (!isSizeInStock(size)) {
    showNotification('Ky variant është jashtë stokut.');
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

  if (!isSizeInStock(size)) {
    showNotification('Ky variant është jashtë stokut.');
    return;
  }
  
  closeModal('productModal');
  document.getElementById('orderModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// ----- Order Functions -----
async function submitOrder() {
  const name = document.getElementById('inputName').value.trim();
  const surname = document.getElementById('inputSurname').value.trim();
  const city = document.getElementById('inputCity').value.trim();
  const street = document.getElementById('inputStreet').value.trim();
  const phone = document.getElementById('inputPhone').value.trim();
  const emailEl = document.getElementById('inputEmail');
  const commentEl = document.getElementById('inputComment');
  const email = emailEl ? emailEl.value.trim() : '';
  const comment = commentEl ? commentEl.value.trim() : '';

  if (!name || !surname || !city || !street || !phone) {
    showNotification('Ju lutem plotësoni të gjitha fushat e detyrueshme!');
    return;
  }

  const phoneRegex = /^[+]?[0-9\s\-\(\)]{8,}$/;
  if (!phoneRegex.test(phone)) {
    showNotification('Ju lutem shkruani një numër telefoni të vlefshëm!');
    return;
  }

  const cartSnapshot =
    typeof cart !== 'undefined' && cart && cart.length > 0 ? cart.map((i) => ({ ...i })) : null;

  let lines = [];

  if (cartSnapshot && cartSnapshot.length > 0) {
    lines = cartSnapshot.map((i) => ({
      product_id: i.id,
      size: i.size,
      color: i.color,
      quantity: i.quantity || 1,
      name: i.name,
      price: i.price,
    }));
  } else {
    const size = document.getElementById('modalSize') && document.getElementById('modalSize').value;
    const color = document.getElementById('modalColor') && document.getElementById('modalColor').value;
    const quantity =
      parseInt(document.getElementById('modalQuantity') && document.getElementById('modalQuantity').value, 10) || 1;
    if (!currentProduct || !size || !color) {
      showNotification('Mungon produkti ose madhësia/ngjyra. Hapni produktin dhe plotësoni fushat.');
      return;
    }

    lines = [
      {
        product_id: currentProduct.id,
        size,
        color,
        quantity,
        name: currentProduct.name,
        price: currentProduct.price,
      },
    ];
  }

  // Build server payload
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const payload = {
    orderNumber,
    customer: { name, surname, city, street, phone, email, comment },
    lines,
  };

  const loadingEl = document.querySelector('.loading');
  if (loadingEl) loadingEl.style.display = 'flex';

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.ok) {
      throw new Error(data?.error || 'Porosia dështoi');
    }
  } catch (err) {
    if (loadingEl) loadingEl.style.display = 'none';
    showNotification(`Dështoi porosia: ${err.message}. Sigurohu që serveri po punon (npm start).`);
    return;
  }

  if (loadingEl) loadingEl.style.display = 'none';
  closeModal('orderModal');
  document.getElementById('successModal').style.display = 'flex';

  ['inputName', 'inputSurname', 'inputCity', 'inputStreet', 'inputPhone', 'inputEmail', 'inputComment'].forEach(
    (id) => {
      const element = document.getElementById(id);
      if (element) element.value = '';
    }
  );

  clearCart();

  const orderNumberElement = document.getElementById('orderNumber');
  if (orderNumberElement) orderNumberElement.textContent = orderNumber;

  setTimeout(() => closeModal('successModal'), 4000);
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
            </select>
            <label class="field-label">Ngjyra</label>
            <select id="modalColor" class="field-control">
              <option value="">Zgjidh ngjyrën</option>
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
window.hydrateProductImagesFromApi = hydrateProductImagesFromApi;
window.getProductImageUrl = getProductImageUrl;