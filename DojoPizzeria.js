function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deepDish", "traditional", "mozzarella", ["pepperoni, sausage"]);
console.log(p1);

var p2 = pizzaOven("handTossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("detroitStyle", "traditional", "classic blend", "halalPepperoni");
console.log(p3);

var p4 = pizzaOven("thin", "traditional", ["mozzarella", "romano", "EXTRA BOTH"]);
console.log(p4);

