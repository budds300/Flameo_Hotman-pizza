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
    const flavorPizza = document.getElementById("flavor").value;
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
            if(flavorPizza==1){
            alert("Hello your order is Peri Peri Chicken It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  " Thank-you")
        }
            else if(flavorPizza==2){
                alert("Hello your order is Hawaiian It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  " Thank-you")
            }
            else if(flavorPizza==3){
                alert("Hello your order is Boerewors Pizza It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  " Thank-you")
            }
            else if(flavorPizza==4){
                alert("Hello your order is BBQ Steak Pizza It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  " Thank-you")
            }
            else if(flavorPizza==5){
                alert("Hello your order is Chicken Tikka Pizza It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  " Thank-you")
            }
            else if(flavorPizza==6){
                alert("Hello your order is Chicken and Mushroom It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  " Thank-you")
            }
            else if(flavorPizza==7){
                alert("Hello your order is Margherita Pizza It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  " Thank-you")
            }
            else if(flavorPizza==8){
                alert("Hello your order is Regina Pizza It will be delivered to you shortly at "+ deliveryLocation+ " and the total price is: "+totalPriceDelivery+  " Thank-you")
            }
            else{
                alert("Choose a flavor")}
             console.log(customerCostPrice.getPrice()+ deliveryPrice *quantity );
             
        }
        else if (deliveryCost=="collection") {

            if(flavorPizza==1){
                alert("Hello your order is Peri Peri Chicken,it will be ready for collection to you shortly at our shop in Karen WaterFront and the total price is: "+customerCostPrice.getPrice()*quantity+  "Thank-you")
            }
                else if(flavorPizza==2){
                    alert("Hello your order is Hawaiian, it will be ready for collection to you shortly at our shop in Karen WaterFront and the total price is:: "+customerCostPrice.getPrice()*quantity+  "Thank-you")
                }
                else if(flavorPizza==3){
                    alert("Hello your order is Boerewors Pizza,it will be ready for collection to you shortly at our shop in Karen WaterFront and the total price is:: "+customerCostPrice.getPrice()*quantity+  "Thank-you")
                }
                else if(flavorPizza==4){
                    alert("Hello your order is BBQ Steak Pizza,it will be ready for collection to you shortly at our shop in Karen WaterFront and the total price is: "+customerCostPrice.getPrice()*quantity+  "Thank-you")
                }
                else if(flavorPizza==5){
                    alert("Hello your order is Chicken Tikka Pizza,it will be ready for collection to you shortly at our shop in Karen WaterFront and the total price is: "+customerCostPrice.getPrice()*quantity+  "Thank-you")
                }
                else if(flavorPizza==6){
                    alert("Hello your order is Chicken and Mushroom,it will be ready for collection to you shortly at our shop in Karen WaterFront and the total price is: "+customerCostPrice.getPrice()*quantity+  " Thank-you")
                }
                else if(flavorPizza==7){
                    alert("Hello your order is Margherita Pizza,it will be ready for collection to you shortly at our shop in Karen WaterFront and the total price is: "+customerCostPrice.getPrice()*quantity+  "Thank-you")
                }
                else if(flavorPizza==8){
                    alert("Hello your order is Regina Pizza,it will be ready for collection to you shortly at our shop in Karen WaterFront and the total price is: "+customerCostPrice.getPrice()*quantity+  "Thank-you")
                }
                else{
                    alert("Choose a flavor")}
      
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

    


