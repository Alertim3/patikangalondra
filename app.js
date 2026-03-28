// Complete Application Code
const TelegramBot = require('node-telegram-bot-api');

// Your Telegram Bot Token
const token = '8758575192:AAEwz_kqGzeJ4CAlEH2tAI8d_NaMYeATSCU';
const chatId = '7330540386';

// Create a new Telegram bot instance
const bot = new TelegramBot(token, { polling: true });

// Function to send order details to Telegram
function sendOrderToTelegram(order) {
    const message = `New Order:

Customer Name: ${order.name}\nAddress: ${order.address}\nPhone: ${order.phone}\nItems: ${order.items.join(', ')}`;
    bot.sendMessage(chatId, message);
}

// Existing collections data
const collections = { /* Original collections data here */ };

// Cart functionality
const cart = { /* Cart functionality here */ };

// Modal flows
const modals = { /* Modal flows functionality here */ };

// Example of invoking sendOrderToTelegram function on order completion
function completePurchase(order) {
    // Existing purchase completion logic
    sendOrderToTelegram(order);
}

// Other existing application code continues here...