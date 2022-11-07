// JavaScript constructor function is a regular function used to create multiple similar objects.

function car(brand,modal,color){
    this.Brand=brand;
    this.Modal=modal;
    this.Color=color
}

let car1= new car('Hyndai','creata','black')
console.log(car1)