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
const pizzaSize = ["small","medium","Large"];
const pizzaCrust = ["crispy","stuffed","glutten free"]
const pizzaToppings = ["peperroni","mushrooms","onions","sausage","bacon","extra-cheese","green-pepper"];
const sizePrice = [600,800,1000];
const crustPrice = [250,300,200];
const toppingsPrice = [50,50,50,100,150,100,50];
let form = document.getElementById("pizza");
form.addEventListener("submit", (e) =>{
    const sizePizza = document.getElementById("pizza-size").value;
    const curstPizza = document.getElementById("crust").value;
    const toppingsPizza = document.getElementById("toppings").value;
   
} )