// submitOrder event listener
submitOrder.addEventListener('click', function() {
    const orderData = getOrderData(); // assume this function retrieves the order data
    fetch('https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: 'YOUR_CHAT_ID',
            text: `New Order: ${JSON.stringify(orderData)}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Telegram notification sent:', data);
        // Display success modal
        showSuccessModal();
    })
    .catch(error => {
        console.error('Error sending Telegram notification:', error);
        // Display success modal even if there was an error
        showSuccessModal();
    });
});

// rest of the code remains unchanged...