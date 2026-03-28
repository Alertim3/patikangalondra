// Filter only Nike products
const nikeProducts = {
  "Air Force 1": collectionsData["Air Force 1"],
  "Air Jordan 4": collectionsData["Air Jordan 4"]
  // Add other Nike categories
};

// Render only Nike products
Object.keys(nikeProducts).forEach(categoryName => {
  // Same rendering logic as app.js but only for Nike
  // ...
});