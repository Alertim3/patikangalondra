// ----- Product Data with 50+ Products -----
const collectionsData = {
  "Nike Air Force 1": [
    {
      id: 1,
      name: "Nike Air Force 1 '07 White",
      price: "119,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 2,
      name: "Nike Air Force 1 Low Black",
      price: "124,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Black",
      sizeRange: [38, 39, 40, 41, 42, 43, 44]
    },
    {
      id: 3,
      name: "Nike AF1 Triple White Premium",
      price: "139,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "White",
      sizeRange: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 4,
      name: "Nike AF1 Shadow Pale Ivory",
      price: "129,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Beige",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 5,
      name: "Nike AF1 React White",
      price: "149,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "White",
      sizeRange: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 6,
      name: "Nike AF1 '07 LV8 Utility",
      price: "134,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Gray",
      sizeRange: [38, 39, 40, 41, 42, 43, 44]
    },
    {
      id: 7,
      name: "Nike AF1 Flyknit 2.0",
      price: "144,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Black",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 8,
      name: "Nike AF1 Sage Low LX",
      price: "139,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Green",
      sizeRange: [38, 39, 40, 41, 42, 43]
    }
  ],
  "Nike Air Jordan": [
    {
      id: 21,
      name: "Air Jordan 1 Retro High OG",
      price: "189,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Red",
      sizeRange: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 22,
      name: "Air Jordan 4 Retro Military Black",
      price: "219,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Black",
      sizeRange: [40, 41, 42, 43, 44, 45]
    },
    {
      id: 23,
      name: "Air Jordan 11 Retro Concord",
      price: "239,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "White",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 24,
      name: "Air Jordan 5 Retro Fire Red",
      price: "209,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Red",
      sizeRange: [38, 39, 40, 41, 42, 43, 44]
    },
    {
      id: 25,
      name: "Air Jordan 6 Retro Infrared",
      price: "199,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Black",
      sizeRange: [39, 40, 41, 42, 43]
    },
    {
      id: 26,
      name: "Air Jordan 3 Retro Black Cement",
      price: "229,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Black",
      sizeRange: [40, 41, 42, 43, 44, 45]
    },
    {
      id: 27,
      name: "Air Jordan 12 Retro Gym Red",
      price: "219,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Red",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 28,
      name: "Air Jordan 13 Retro Brave Blue",
      price: "209,99 EURO",
      image: "",
      category: "Nike",
      brand: "Nike",
      color: "Blue",
      sizeRange: [38, 39, 40, 41, 42, 43, 44]
    }
  ],
  "Adidas Originals": [
    {
      id: 41,
      name: "Adidas Ultraboost 22",
      price: "159,99 EURO",
      image: "",
      category: "Adidas",
      brand: "Adidas",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 42,
      name: "Adidas Superstar Classic",
      price: "99,99 EURO",
      image: "",
      category: "Adidas",
      brand: "Adidas",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 43,
      name: "Adidas Gazelle Indoor",
      price: "109,99 EURO",
      image: "",
      category: "Adidas",
      brand: "Adidas",
      color: "Blue",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 44,
      name: "Adidas NMD_R1",
      price: "139,99 EURO",
      image: "",
      category: "Adidas",
      brand: "Adidas",
      color: "Black",
      sizeRange: [38, 39, 40, 41, 42, 43, 44]
    },
    {
      id: 45,
      name: "Adidas Stan Smith",
      price: "89,99 EURO",
      image: "",
      category: "Adidas",
      brand: "Adidas",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 46,
      name: "Adidas Yeezy Boost 350 V2",
      price: "249,99 EURO",
      image: "",
      category: "Adidas",
      brand: "Adidas",
      color: "Gray",
      sizeRange: [40, 41, 42, 43, 44, 45]
    },
    {
      id: 47,
      name: "Adidas Forum Low",
      price: "119,99 EURO",
      image: "",
      category: "Adidas",
      brand: "Adidas",
      color: "White",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 48,
      name: "Adidas ZX 2K Boost",
      price: "129,99 EURO",
      image: "",
      category: "Adidas",
      brand: "Adidas",
      color: "Blue",
      sizeRange: [38, 39, 40, 41, 42, 43, 44]
    }
  ],
  "Puma Classics": [
    {
      id: 61,
      name: "Puma Suede Classic XXI",
      price: "84,99 EURO",
      image: "",
      category: "Puma",
      brand: "Puma",
      color: "Black",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 62,
      name: "Puma RS-X³ Puzzle",
      price: "119,99 EURO",
      image: "",
      category: "Puma",
      brand: "Puma",
      color: "Multicolor",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 63,
      name: "Puma Clyde All-Pro",
      price: "109,99 EURO",
      image: "",
      category: "Puma",
      brand: "Puma",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43, 44]
    },
    {
      id: 64,
      name: "Puma Future Rider Twofold",
      price: "94,99 EURO",
      image: "",
      category: "Puma",
      brand: "Puma",
      color: "Gray",
      sizeRange: [39, 40, 41, 42, 43]
    },
    {
      id: 65,
      name: "Puma MB.01 LaMelo Ball",
      price: "149,99 EURO",
      image: "",
      category: "Puma",
      brand: "Puma",
      color: "Yellow",
      sizeRange: [40, 41, 42, 43, 44, 45]
    },
    {
      id: 66,
      name: "Puma Slipstream Lo",
      price: "99,99 EURO",
      image: "",
      category: "Puma",
      brand: "Puma",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 67,
      name: "Puma Palermo OG",
      price: "89,99 EURO",
      image: "",
      category: "Puma",
      brand: "Puma",
      color: "Green",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 68,
      name: "Puma Ralph Sampson Low",
      price: "104,99 EURO",
      image: "",
      category: "Puma",
      brand: "Puma",
      color: "Red",
      sizeRange: [38, 39, 40, 41, 42, 43]
    }
  ],
  "New Balance": [
    {
      id: 81,
      name: "New Balance 574 Core",
      price: "129,99 EURO",
      image: "",
      category: "New Balance",
      brand: "New Balance",
      color: "Gray",
      sizeRange: [38, 39, 40, 41, 42, 43, 44]
    },
    {
      id: 82,
      name: "New Balance 990v6 Made in USA",
      price: "199,99 EURO",
      image: "",
      category: "New Balance",
      brand: "New Balance",
      color: "Gray",
      sizeRange: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 83,
      name: "New Balance 550 White Black",
      price: "149,99 EURO",
      image: "",
      category: "New Balance",
      brand: "New Balance",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 84,
      name: "New Balance 2002R Protection Pack",
      price: "179,99 EURO",
      image: "",
      category: "New Balance",
      brand: "New Balance",
      color: "Gray",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 85,
      name: "New Balance 9060 Joe Freshgoods",
      price: "189,99 EURO",
      image: "",
      category: "New Balance",
      brand: "New Balance",
      color: "Pink",
      sizeRange: [40, 41, 42, 43, 44, 45]
    },
    {
      id: 86,
      name: "New Balance 327 Sunbeam",
      price: "119,99 EURO",
      image: "",
      category: "New Balance",
      brand: "New Balance",
      color: "Orange",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 87,
      name: "New Balance 991 Made in UK",
      price: "209,99 EURO",
      image: "",
      category: "New Balance",
      brand: "New Balance",
      color: "Blue",
      sizeRange: [39, 40, 41, 42, 43, 44]
    }
  ],
  "Converse": [
    {
      id: 101,
      name: "Converse Chuck Taylor All Star",
      price: "74,99 EURO",
      image: "",
      category: "Converse",
      brand: "Converse",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 102,
      name: "Converse Run Star Motion",
      price: "119,99 EURO",
      image: "",
      category: "Converse",
      brand: "Converse",
      color: "Black",
      sizeRange: [37, 38, 39, 40, 41, 42, 43]
    },
    {
      id: 103,
      name: "Converse Chuck 70 High Top",
      price: "99,99 EURO",
      image: "",
      category: "Converse",
      brand: "Converse",
      color: "Navy",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 104,
      name: "Converse One Star Pro",
      price: "89,99 EURO",
      image: "",
      category: "Converse",
      brand: "Converse",
      color: "Yellow",
      sizeRange: [39, 40, 41, 42, 43, 44]
    },
    {
      id: 105,
      name: "Converse Jack Purcell Signature",
      price: "94,99 EURO",
      image: "",
      category: "Converse",
      brand: "Converse",
      color: "White",
      sizeRange: [38, 39, 40, 41, 42, 43]
    },
    {
      id: 106,
      name: "Converse CX Floatride",
      price: "129,99 EURO",
      image: "",
      category: "Converse",
      brand: "Converse",
      color: "Gray",
      sizeRange: [39, 40, 41, 42, 43, 44]
    }
  ]
};

// Get all products as a flat array
function getAllProducts() {
  const allProducts = [];
  Object.values(collectionsData).forEach(category => {
    allProducts.push(...category);
  });
  return allProducts;
}

// ----- Cart Storage -----
let cart = JSON.parse(localStorage.getItem('patika-cart')) || [];

// ----- Save Cart to LocalStorage -----
function saveCart() {
  localStorage.setItem('patika-cart', JSON.stringify(cart));
}

// ----- Update Cart Count -----
function updateCartCount() {
  const cartCounts = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  cartCounts.forEach(count => {
    count.textContent = totalItems;
  });
}

// ----- Add to Cart -----
function addToCart(product, size = '40', color = (product && product.color) ? product.color : '', quantity = 1) {
  const existingItem = cart.find(item => 
    item.id === product.id && 
    item.size === size && 
    item.color === color
  );
  
  const adminImage =
    typeof window.getProductImageUrl === 'function' ? window.getProductImageUrl(product.id) : '';

  if (existingItem) {
    existingItem.quantity += quantity;
    if (adminImage && adminImage.indexOf('data:image/svg') === -1) {
      existingItem.image = adminImage;
    }
  } else {
    cart.push({
      ...product,
      image: adminImage,
      size,
      color,
      quantity
    });
  }
  
  saveCart();
  updateCartCount();
  showNotification(`${product.name} u shtua në karte!`);
  
  // Update cart modal if it's open
  if (typeof updateCartModal === 'function') {
    updateCartModal();
  }
}

// ----- Remove from Cart -----
function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    showNotification(`${removedItem.name} u hoq nga karta!`);
    
    // Update cart modal if it's open
    if (typeof updateCartModal === 'function') {
      updateCartModal();
    }
  }
}

// ----- Clear Cart -----
function clearCart() {
  cart = [];
  saveCart();
  updateCartCount();
  if (typeof updateCartModal === 'function') {
    updateCartModal();
  }
}

// ----- Show Notification -----
function showNotification(message) {
  // Remove existing notifications
  document.querySelectorAll('.notification').forEach(n => n.remove());
  
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 120px;
    right: 30px;
    background: #2ecc71;
    color: white;
    padding: 18px 28px;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    z-index: 3000;
    animation: slideInRight 0.3s ease;
    font-weight: 600;
    max-width: 350px;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ----- Initialize -----
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
  
  // Add notification styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});

// Make functions globally accessible
window.collectionsData = collectionsData;
window.getAllProducts = getAllProducts;
window.cart = cart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartCount = updateCartCount;
window.showNotification = showNotification;
window.saveCart = saveCart;
window.clearCart = clearCart;