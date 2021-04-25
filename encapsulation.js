// object literals


// let circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1

//     },
//     draw: function(){
//         console.log("draw")
//     }
// }


// factory function


function createCircle(radius){
    return {
        radius,
        draw : function(){
            console.log("draw")
        }
    }
    
       
  
}


const circle = createCircle(3)
circle.draw();




// constructor function


function Circle(radius) {
    console.log("this", this)

    this.radius = radius;
    this.draw = function() {
        console.log("draw with ",  this.radius);
    }
}

const another = new Circle(5)

another.draw();
console.log(circle.radius)




// ADD PROPERTY IN FUNCTION DYNAMICALLY


function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log("draw with ", this.radius)
    }
}


const another_circle = new Circle(51)



// line 75 adding property in object
another_circle.diameter = another_circle.radius*2
another_circle.circumference = 2456646
another_circle.draw()





// looping throgh function. this is enumerating process

for (let key in another_circle){
    console.log(key)
    if (key == "circumference"){
        console.log(another_circle[key], "this is circumference")

    }
    
}



// to get the keys of objects from function 

function Car( ) {
    this.wheel = 4
    this.color = "red"
    this.power = 5000
}


let buggati = new Car()

// we use "Object.keys(object variable)"
const keys = Object.keys(buggati)
console.log(keys)




// ABSTRACTION : it means hode the details and show the essentials. lets take an example





function Car( ) {
    // this is local variable cant be accesesd directly
    // we cant access this directly 
    // we just need create new function and return as output
    let x = 89
    this.wheel = 4
    this.color = "red"
    this.power = 5000
    this.value_fucn = function() {
        return x
 

       
        
    }
}


let model = new Car()

console.log(model.value_fucn(), "this is x")





// setter and getter in javascript


// we will use "Object.defineproperty" to get the private variable (varibale which is not intialized using the "this." method)

// here is the Syntax




// to get the local variable as property of object 
function Car1( ) {
    
    let x = 89
    this.wheel = 4
    this.color = "red"
    this.power = 5000
    // Object.defineProperty(this, "name os our property taht will be called", "3rd one is key value pair")

    Object.defineProperty(this, "x", {
        get: function(){
            return x
        }
      
    })

    // to set private varibale we will use set: fucntion as 3rd parameter


 
}


let model1 = new Car1()

// now get the x value using using dot Notation

console.log(model1.x)
