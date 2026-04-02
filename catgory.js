// ----- Category Page JavaScript -----
function renderCategoryProducts(products, categoryName) {
  const container = document.getElementById('categoryProducts');
  if (!container) return;
  
  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fas fa-search" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
        <h3 style="color: #666; margin-bottom: 10px;">Nuk u gjetën produkte për këtë kategori</h3>
        <p style="color: #999;">Ju lutem kontrolloni përsëri më vonë ose shikoni kategori të tjera.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
      <img src="${typeof window.getProductImageUrl === 'function' ? window.getProductImageUrl(product.id) : (product.image || '')}" alt="${product.name}" loading="lazy">
      <strong>${product.name}</strong>
      <span>${product.price}</span>
      <button class="detail-btn">Shiko Detajet</button>
      <button class="add-to-cart-btn">Shto në Karte</button>
    `;
    
    productCard.querySelector('.detail-btn').addEventListener('click', () => openProductDetail(product));
    productCard.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      // Open modal so user selects size/color (needed for per-variant stock)
      openProductDetail(product);
    });
    
    container.appendChild(productCard);
  });
  
  // Initialize modals for category pages
  if (!document.getElementById('productModal').innerHTML) {
    createModals();
  }
}

// ----- Get Products by Category -----
function getProductsByCategory(category) {
  const allProducts = [];
  
  Object.keys(collectionsData).forEach(section => {
    collectionsData[section].forEach(product => {
      if (product.category === category) {
        allProducts.push(product);
      }
    });
  });
  
  return allProducts;
}

// ----- Initialize Category Page -----
document.addEventListener('DOMContentLoaded', async function () {
  if (typeof window.hydrateProductImagesFromApi === 'function') {
    await window.hydrateProductImagesFromApi();
  }

  // Update cart count
  updateCartCount();
  
  // Get current page category from URL
  const path = window.location.pathname;
  let category = '';
  
  if (path.includes('nike.html')) category = 'Nike';
  else if (path.includes('adidas.html')) category = 'Adidas';
  else if (path.includes('puma.html')) category = 'Puma';
  else if (path.includes('newbalance.html')) category = 'New Balance';
  else if (path.includes('converse.html')) category = 'Converse';
  
  // If on a category page, render products
  if (category) {
    // Set active link in dropdown
    const activeLink = document.querySelector(`a[href*="${category.toLowerCase()}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
    
    // Get and render products
    const categoryProducts = getProductsByCategory(category);
    renderCategoryProducts(categoryProducts, category);
    
    // Update page title
    document.title = `${category} - Patika Nga Londra`;
  }
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Create modals
  createModals();
});

// Add to window object for global access
window.getProductsByCategory = getProductsByCategory;
window.renderCategoryProducts = renderCategoryProducts;