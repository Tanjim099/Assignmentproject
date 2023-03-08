const calculateTotalCost = (cartItems) => {
  let totalCost = 0;
  for (let item of cartItems) {
    totalCost += item.unitPrice * item.quantity;
  }
  return totalCost;
}
const cartItems = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 5, quantity: 3 },
  { unitPrice: 3, quantity: 1 }
];

const totalCost = calculateTotalCost(cartItems);
console.log(totalCost); // Output: 31
