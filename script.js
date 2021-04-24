function Pizza(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
function Price(pizzaSizePrice,pizzaCrustPrice,pizzaToppingsPrice){
    this.pizzaSizePrice = pizzaSizePrice;
    this.pizzaCrustPrice = pizzaCrustPrice;
    this.toppings = pizzaToppingsPrice;
}
Price.prototype.getPrice = function(){
    return this.pizzaSizePrice + this.pizzaCrustPrice + this.pizzaToppingsPrice;
}

form.addEventListener("submit", (e) =>{
    const sizePizza = document.getElementById("pizza-size").value;
    const curstPizza = document.getElementById("crust").value;
    const toppingsPizza = document.getElementById("toppings").value;
    
} )