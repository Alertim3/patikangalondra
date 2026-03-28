function submitOrder() {
    // existing logic for order submission

    // Call Telegram bot API to send order notification
    sendOrderToTelegram(orderDetails);
}

function sendOrderToTelegram(orderDetails) {
    const url = `https://api.telegram.org/bot8758575192:AAEwz_kqGzeJ4CAlEH2tAI8d_NaMYeATSCU/sendMessage`;
    const message = createFormattedMessage(orderDetails);
    const data = {
        chat_id: '7330540386',
        text: message,
        parse_mode: 'HTML'
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}

function createFormattedMessage(orderDetails) {
    let message = '<b>New Order Received</b>:\n';
    message += `<b>Customer:</b> ${orderDetails.customerName}\n`;
    message += `<b>Items:</b> ${orderDetails.items.map(item => item.name + ' (x' + item.quantity + ')').join(', ')}\n`;
    message += `<b>Total Price:</b> ${orderDetails.totalPrice}\n`;
    return message;
}