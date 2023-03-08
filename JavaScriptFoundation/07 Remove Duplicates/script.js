// Sample array of items to be added to cart
const itemsToAdd = ["Shirt", "Pants", "Shoes", "Shirt", "Watch", "Pants"];

// Create an empty cart array to hold the unique items
const cart = [];

// Iterate through each item in the itemsToAdd array
for (let i = 0; i < itemsToAdd.length; i++) {
  const currentItem = itemsToAdd[i];

  // Check if the item already exists in the cart
  if (!cart.includes(currentItem)) {
    // If the item doesn't exist in the cart, add it
    cart.push(currentItem);
  }
}

console.log(cart); // Output: ["Shirt", "Pants", "Shoes", "Watch"]
