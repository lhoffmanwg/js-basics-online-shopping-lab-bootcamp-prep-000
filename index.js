var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = 0;
  var cart = [];
  price = Math.random;
  cart.push("{ itemName: " + item +", itemPrice: "+ price);
  return (`${item} has been added to your cart.`);
 
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  var i = 0;
  if(cardNumber===null){
     return ("Sorry, we don't have a credit card on file for you.");
  }else{
    for(i = 0; i < cart.length; i++){
      cart.pop;
    }
    return (`Your total cost is ${total}, which will; be charged to ${cardNumber}.`);
  }
}
