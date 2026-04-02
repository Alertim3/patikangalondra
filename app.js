// TELEGRAM CONFIG
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID";


// ----- Data -----
const collectionsData = {
  "Air Force 1": [
    {
      id: 1,
      name: "Nike Air Force 1 '07",
      price: "99,99 EURO",
      image: ""
    }
  ]
};

// ----- Globals -----
const collectionsContainer = document.getElementById("collections");
const productModal = document.getElementById("productModal");
const orderModal = document.getElementById("orderModal");
const successModal = document.getElementById("successModal");

let selectedProduct = null;


// ----- Render Products -----
Object.keys(collectionsData).forEach(categoryName => {

  const section = document.createElement("div");
  section.className = "collection";

  const productsEl = document.createElement("div");

  collectionsData[categoryName].forEach(prod => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="${prod.image}">
      <strong>${prod.name}</strong>
      <span>${prod.price}</span>
      <button onclick='openProductDetail(${JSON.stringify(prod)})'>
      Order
      </button>
    `;

    productsEl.appendChild(card);
  });

  section.appendChild(productsEl);
  collectionsContainer.appendChild(section);

});


// ----- Product Modal -----
function openProductDetail(product) {
  selectedProduct = product;

  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalPrice").textContent = product.price;

  productModal.style.display = "flex";
}


// ----- ORDER BUTTON -----
document.getElementById("orderBtn").addEventListener("click", () => {

  productModal.style.display = "none";
  orderModal.style.display = "flex";

});


// ----- SUBMIT ORDER -----
document.getElementById("submitOrder").addEventListener("click", async () => {

  const name = document.getElementById("inputName").value;
  const surname = document.getElementById("inputSurname").value;
  const city = document.getElementById("inputCity").value;
  const street = document.getElementById("inputStreet").value;
  const phone = document.getElementById("inputPhone").value;

  const size = document.getElementById("modalSize").value;
  const color = document.getElementById("modalColor").value;

  if (!name || !surname || !city || !street || !phone) {
    alert("Fill all fields");
    return;
  }

  // TELEGRAM MESSAGE
  const message = `
🛒 NEW ORDER

Product: ${selectedProduct.name}
Price: ${selectedProduct.price}

Size: ${size}
Color: ${color}

Customer:
${name} ${surname}

City: ${city}
Street: ${street}
Phone: ${phone}
`;

  // SEND TO TELEGRAM
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message
    })
  });

  orderModal.style.display = "none";
  successModal.style.display = "flex";

});