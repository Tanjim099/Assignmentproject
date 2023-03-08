function doubleCartQuantity(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i] *= 2;
  }
  return cart;
}
let cart = [2, 4, 1, 3, 5];
cart = doubleCartQuantity(cart);
console.log(cart); // Output: [4, 8, 2, 6, 10]
