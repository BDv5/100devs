//Create a constructor with 4 properties and 3 methods

function MakePizza(size, crust, toppings, temperature) {
    this.size = size
    this.crusttype = crust
    this.toppings = toppings
    this.temerature = temperature

    this.cooktime = function() {
        console.log(`cook until temp = ${bestPizza.temerature}`) 
    }
    this.burnMouth =  function {
        console.log('DOIENSKLDKL:nvldkjale')
    }
    this.deliveryTime = function() {
        console.log('your delivery time is ????')
    }

}

let pizza = new MakePizza('large', 'medium', ['pepperoni, sausage'], 180)

MakePizza.prototype.cheese = false

