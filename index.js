var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {
   [item]: Math.floor(Math.random() * 100) + 1
 }
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
 if(cart.length === 0){
   console.log('Your shopping cart is empty.') 
 } else if (cart.length === 1){
   console.log(`In your cart, you have`)
 }
}

function total() {
  let total = 0;
for(let i = 0; i<cart.length; i++){
    let object = cart[i]
    total = total + object;
} return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
}
