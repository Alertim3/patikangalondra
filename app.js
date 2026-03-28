// Complete frontend JavaScript code for the sneaker e-commerce store

// Product collections
const products = [
    { id: 1, name: 'Sneaker A', price: 99.99, image: 'url_to_image_A' },
    { id: 2, name: 'Sneaker B', price: 89.99, image: 'url_to_image_B' },
    // ... more products
];

// Shopping cart
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    // Logic to update cart display on the frontend
}

// Modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Order handling
function placeOrder() {
    // Logic to handle order placement
    sendOrderToTelegram(cart);
}

// Telegram bot integration
function sendOrderToTelegram(order) {
    const token = '8758575192:AAEwz_kqGzeJ4CAlEH2tAI8d_NaMYeATSCU';
    const chatId = '7330540386';
    const message = `New order: ${JSON.stringify(order)}`;
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ chat_id: chatId, text: message }),
    });
}

// Additional functionality as needed...