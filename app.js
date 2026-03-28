// ----- Data -----
const collectionsData = {
  "Air Force 1": [
    {
      id: 1,
      name: "Nike Air Force 1 '07",
      price: "99,99 EURO",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Nike Air Force 1 Low",
      price: "109,99 EURO",
      image: "https://images.unsplash.com/photo-1603855140463-4f6080e4190a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Nike AF1 Triple White",
      price: "119,99 EURO",
      image: "https://images.unsplash.com/photo-1601794066601-846ee644d88a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Nike AF1 Black",
      price: "99,99 EURO",
      image: "https://images.unsplash.com/photo-1593665139043-2b5d92c54700?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Nike AF1 Gray",
      price: "89,99 EURO",
      image: "https://images.unsplash.com/photo-1604477846499-b65758f9f0da?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Nike AF1 Navy",
      price: "109,99 EURO",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      name: "Nike AF1 Red",
      price: "129,99 EURO",
      image: "https://images.unsplash.com/photo-1619983085100-09f7a80b7730?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Air Jordan 4": [
    {
      id: 21,
      name: "Air Jordan 4 Retro",
      price: "189,99 EURO",
      image: "https://images.unsplash.com/photo-1581578016128-7afee4f3d8dd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 22,
      name: "AJ4 White Cement",
      price: "199,99 EURO",
      image: "https://images.unsplash.com/photo-1618453421440-c6400760f2ae?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 23,
      name: "AJ4 Bred",
      price: "199,99 EURO",
      image: "https://images.unsplash.com/photo-1556248421-232a5535db97?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 24,
      name: "AJ4 Fire Red",
      price: "189,99 EURO",
      image: "https://images.unsplash.com/photo-1598300053537-9c4fc9127cd2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 25,
      name: "AJ4 Taupe Haze",
      price: "199,99 EURO",
      image: "https://images.unsplash.com/photo-1581553220050-b4715d4abbac?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 26,
      name: "AJ4 Green",
      price: "209,99 EURO",
      image: "https://images.unsplash.com/photo-1544236006-89253a0d1f1c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Adidas": [
    {
      id: 41,
      name: "Adidas Ultraboost",
      price: "139,99 EURO",
      image: "https://images.unsplash.com/photo-1603005578024-683d8d393a31?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 42,
      name: "Adidas Superstar",
      price: "89,99 EURO",
      image: "https://images.unsplash.com/photo-1574755395177-ee12b548b0f0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 43,
      name: "Adidas Gazelle",
      price: "99,99 EURO",
      image: "https://images.unsplash.com/photo-1579858557039-ff621fe02517?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 44,
      name: "Adidas NMD",
      price: "129,99 EURO",
      image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 45,
      name: "Adidas Forum",
      price: "109,99 EURO",
      image: "https://images.unsplash.com/photo-1604677034410-f1cae795a564?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Puma": [
    {
      id: 61,
      name: "Puma Suede Classic",
      price: "79,99 EURO",
      image: "https://images.unsplash.com/photo-1612306607775-5d423a5c9426?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 62,
      name: "Puma RS-X",
      price: "109,99 EURO",
      image: "https://images.unsplash.com/photo-1611116429936-7ca10346f271?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 63,
      name: "Puma Clyde",
      price: "99,99 EURO",
      image: "https://images.unsplash.com/photo-1597764698949-b3474a7c9f16?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 64,
      name: "Puma Future Rider",
      price: "89,99 EURO",
      image: "https://images.unsplash.com/photo-1545729669-93ccfa3e1c93?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 65,
      name: "Puma Roma",
      price: "79,99 EURO",
      image: "https://images.unsplash.com/photo-1597415908653-5713245d8374?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

// ----- Globals -----
const collectionsContainer = document.getElementById("collections");
const productModal = document.getElementById("productModal");
const orderModal = document.getElementById("orderModal");
const successModal = document.getElementById("successModal");
const loadingOverlay = document.createElement("div");
loadingOverlay.className = "loading";
loadingOverlay.innerHTML = '<div class="spinner"></div>';
document.body.appendChild(loadingOverlay);

let selectedProduct = null;

// ----- Add to Cart functionality -----
let cart = [];
const cartCount = document.createElement("div");
cartCount.className = "cart-count";
cartCount.textContent = "0";

// ----- Initialize Header with Cart -----
function initHeader() {
  const headerInner = document.querySelector(".header-inner");
  const cartBtn = document.createElement("div");
  cartBtn.className = "dropdown";
  cartBtn.innerHTML = `
    🛒 Karta
    <div class="dropdown-menu" id="cartDropdown">
      <div id="cartItems"></div>
      <hr>
      <div style="padding: 10px 0;">
        <strong>Total: <span id="cartTotal">0 EURO</span></strong>
      </div>
      <button id="checkoutBtn" style="width:100%; padding:10px; background:#e63946; color:white; border:none; border-radius:5px; margin-top:10px;">Paguaj</button>
    </div>
  `;
  
  cartBtn.style.position = "relative";
  cartBtn.appendChild(cartCount);
  
  // Move nav to the left, cart to the right
  const nav = document.querySelector(".nav");
  headerInner.appendChild(cartBtn);
}

// ----- Show Loading -----
function showLoading() {
  loadingOverlay.style.display = "flex";
}

function hideLoading() {
  loadingOverlay.style.display = "none";
}

// ----- Render Collections -----
Object.keys(collectionsData).forEach(categoryName => {
  let index = 0;

  // Section markup
  const section = document.createElement("div");
  section.className = "collection";
  section.innerHTML = `
    <h2>${categoryName}</h2>
    <div class="carousel">
      <div class="arrow left">&#8249;</div>
      <div class="products"></div>
      <div class="arrow right">&#8250;</div>
    </div>
  `;

  const productsEl = section.querySelector(".products");
  const leftArrow = section.querySelector(".left");
  const rightArrow = section.querySelector(".right");
  const arr = collectionsData[categoryName];

  // Render each product card
  arr.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      <strong>${prod.name}</strong>
      <span>${prod.price}</span>
      <button class="detail-btn">Shiko Detajet</button>
    `;
    
    // Click to open detail
    card.querySelector(".detail-btn").addEventListener("click", () => openProductDetail(prod));
    
    // Add to cart button
    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Shto në Karte";
    addToCartBtn.className = "add-to-cart-btn";
    addToCartBtn.style.cssText = `
      width: 100%;
      padding: 10px;
      background: #e63946;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      margin-top: 8px;
      transition: background 0.3s ease;
    `;
    addToCartBtn.addEventListener("mouseenter", () => {
      addToCartBtn.style.background = "#111";
    });
    addToCartBtn.addEventListener("mouseleave", () => {
      addToCartBtn.style.background = "#e63946";
    });
    addToCartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(prod);
    });
    
    card.appendChild(addToCartBtn);
    productsEl.appendChild(card);
  });

  // Update arrow states
  function updateArrows() {
    leftArrow.style.display = index > 0 ? "flex" : "none";
    rightArrow.style.display = index < arr.length - 5 ? "flex" : "none";
  }

  // Arrows
  leftArrow.addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    productsEl.style.transform = `translateX(-${index * 20}%)`;
    updateArrows();
  });

  rightArrow.addEventListener("click", () => {
    index = Math.min(index + 1, arr.length - 5);
    productsEl.style.transform = `translateX(-${index * 20}%)`;
    updateArrows();
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  productsEl.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  productsEl.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && index < arr.length - 5) {
        // Swipe left
        index = Math.min(index + 1, arr.length - 5);
      } else if (diff < 0 && index > 0) {
        // Swipe right
        index = Math.max(index - 1, 0);
      }
      productsEl.style.transform = `translateX(-${index * 20}%)`;
      updateArrows();
    }
  }

  updateArrows();
  collectionsContainer.appendChild(section);
});

// ----- Add to Cart Function -----
function addToCart(product) {
  cart.push({
    ...product,
    quantity: 1,
    size: document.getElementById("modalSize")?.value || "38",
    color: document.getElementById("modalColor")?.value || "E Bardhë"
  });
  
  updateCart();
  showNotification(`${product.name} u shtua në karte!`);
}

function updateCart() {
  cartCount.textContent = cart.length;
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  
  if (cartItems) {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid #eee;
      `;
      
      itemDiv.innerHTML = `
        <div style="flex: 1;">
          <div style="font-size: 12px; color: #666;">${item.name}</div>
          <div style="font-size: 10px; color: #999;">${item.size} | ${item.color}</div>
        </div>
        <div style="margin-left: 10px;">
          <span style="font-weight: bold;">${item.price}</span>
          <button onclick="removeFromCart(${index})" style="margin-left: 10px; background: none; border: none; color: #e63946; cursor: pointer; font-size: 12px;">✕</button>
        </div>
      `;
      
      cartItems.appendChild(itemDiv);
      const price = parseFloat(item.price.replace(',', '.').replace(' EURO', ''));
      total += price;
    });
    
    cartTotal.textContent = `${total.toFixed(2)} EURO`;
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #2ecc71;
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 3000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add CSS for notifications
const notificationStyle = document.createElement("style");
notificationStyle.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(notificationStyle);

// ----- Product Detail -----
function openProductDetail(product) {
  selectedProduct = product;
  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalImg").alt = product.name;
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalPrice").textContent = product.price;
  
  // Reset selects
  document.getElementById("modalSize").value = "";
  document.getElementById("modalColor").value = "";
  
  productModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

document.getElementById("closeProduct").addEventListener("click", () => {
  productModal.style.display = "none";
  document.body.style.overflow = "auto";
});

// ----- Order Flow -----
document.getElementById("orderBtn").addEventListener("click", () => {
  const size = document.getElementById("modalSize").value;
  const color = document.getElementById("modalColor").value;
  
  if (!size || !color) {
    alert("Ju lutem zgjidhni madhësinë dhe ngjyrën!");
    return;
  }
  
  productModal.style.display = "none";
  orderModal.style.display = "flex";
});

document.getElementById("closeOrder").addEventListener("click", () => {
  orderModal.style.display = "none";
  document.body.style.overflow = "auto";
});

document.getElementById("submitOrder").addEventListener("click", async () => {
  const name = document.getElementById("inputName").value;
  const surname = document.getElementById("inputSurname").value;
  const city = document.getElementById("inputCity").value;
  const street = document.getElementById("inputStreet").value;
  const phone = document.getElementById("inputPhone").value;
  
  if (!name || !surname || !city || !street || !phone) {
    alert("Ju lutem plotësoni të gjitha fushat e detyrueshme!");
    return;
  }
  
  showLoading();
  
  // Simulate API call
  setTimeout(() => {
    hideLoading();
    orderModal.style.display = "none";
    successModal.style.display = "flex";
    
    // Reset form
    document.getElementById("inputName").value = "";
    document.getElementById("inputSurname").value = "";
    document.getElementById("inputCity").value = "";
    document.getElementById("inputStreet").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputComment").value = "";
    
    // Clear cart
    cart = [];
    updateCart();
    
    setTimeout(() => {
      successModal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 3000);
  }, 1500);
});

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  if (e.target === orderModal) {
    orderModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  if (e.target === successModal) {
    successModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close modals with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    productModal.style.display = "none";
    orderModal.style.display = "none";
    successModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// ----- Scroll Animations -----
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll to collections when clicking indicator
document.querySelector(".scroll-indicator").addEventListener("click", () => {
  document.querySelector(".collections").scrollIntoView({ 
    behavior: "smooth" 
  });
});

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  updateCart();
  
  // Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});