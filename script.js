function Pizza(flavor,size, crust, toppings){
    this.flavor= flavor;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
function Price(pizzaSizePrice,pizzaCrustPrice,pizzaToppingsPrice){
    this.pizzaSizePrice = pizzaSizePrice;
    this.pizzaCrustPrice = pizzaCrustPrice;
    this.pizzaToppingsPrice = pizzaToppingsPrice;
}
Price.prototype.getPrice = function(){
    return this.pizzaSizePrice + this.pizzaCrustPrice + this.pizzaToppingsPrice;
}
const flavor = ["Peri Peri Chicken","Hawaiian","Boerewors Pizza","BBQ Steak Pizza","Chicken Tikka Pizza","Chicken and Mushroom","Margherita Pizza","Regina Pizza"];
const pizzaSize = ["small","medium","Large"];
const pizzaCrust = ["crispy","stuffed","glutten free"]
const pizzaToppings = ["peperroni","mushrooms","onions","sausage","bacon","extra-cheese","green-pepper"];
const sizePrice = [600,800,1000];
const crustPrice = [250,300,200];
const toppingsPrice = [50,50,50,100,150,100,50];
$("document").ready(function(){

let form = document.getElementById("pizza");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const flavorPizza = parseInt(document.getElementById("flavor"));
    const sizePizza = parseInt(document.getElementById("pizza-size").value);
    const curstPizza = parseInt(document.getElementById("crust").value);
    const toppingsPizza =parseInt(document.getElementById("topping").value);
    let flavorOrder = flavor[flavorPizza-1]
    let sizePizzaOrder= pizzaSize[sizePizza-1];
    let crustPizzaOrder= pizzaCrust[curstPizza-1];
    let toppingsPizzaOrder= pizzaToppings[toppingsPizza-1];
    let customerOrder= new Pizza(flavorOrder,sizePizzaOrder,toppingsPizzaOrder,crustPizzaOrder);
    console.log(customerOrder);
    const sizePriceOrder = sizePrice[sizePizza-1];
    const crustPriceOrder = crustPrice[curstPizza-1];
    const toppingsPriceOrder = toppingsPrice[toppingsPizza-1];
    let deliveryCost= document.getElementById("delivery").value;
    
    
    let customerCostPrice = new Price(sizePriceOrder,crustPriceOrder,toppingsPriceOrder);
    console.log(customerCostPrice, customerCostPrice.getPrice());
    const quantity = parseInt(document.getElementById("quantity").value);

    if (quantity >= 1 && deliveryCost){
        if (deliveryCost=="delivery") {
            let deliveryLocation= prompt("Enter Your Location");
            const deliveryPrice = 300;
            let totalPriceDelivery = customerCostPrice.getPrice()*quantity +deliveryPrice;
            alert("Hello your order is "+ customerOrder.flavorOrder+". It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  "Thank-you")
             console.log(customerCostPrice.getPrice()+ deliveryPrice *quantity );
            
        }
        else if (deliveryCost=="collection") {
           alert( "Hello your order is"+ customerOrder+". It will be ready for collection to you shortly here at our shop in Ngong "+"and the total price is: "+customerCostPrice.getPrice()*quantity +  " Thank-you");
            
            console.log(customerCostPrice.getPrice()*quantity);
            
        }
        else {
            alert("Wacha Jokes Msee")
        }
    }else{
        console.log("Kwani iko NINI!?")
    }
        
    })

} )

    


