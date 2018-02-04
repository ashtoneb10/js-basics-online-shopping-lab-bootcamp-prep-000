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
    let value = Object.values(object)
    let totalString = parseInt(value)
    total = total + totalString
} return total
}

function removeFromCart(item) {
  let total = 0
  for(let i = 0; i<cart.length; i++){
    let object = cart[i]
    if(object.hasOwnProperty(item)){
      
    } else {
      total = total ++
    } 
} if(total === cart.length){
  console.log(`That item is not in your cart.`)
} else {
  return cart;
}
}

function placeOrder(cardNumber) {
  let numberPresent = cardNumber
  let totalPrice = total()
  if(!numberPresent){
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${numberPresent}.`)
    cart = []
  }
}
