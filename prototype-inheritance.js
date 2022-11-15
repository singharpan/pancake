// Inheritance in javascript is different from other languages
// Prototypal inheritance and classical inheritance is different
// It is "JUST SIMPLE" => One object trying to access properties of another object
// Whenever we are creating any object and array , Javascript attaches some 
// properties and functions to it
// These come from prototype 
// Javascript "attaches" a object to our object
// "__proto__" is the object where javacript put all the properties and functions

//  ???? object 1 will as prototype to object 2 

let obj1={
    a:1
}
let obj2={
    a:2,
    __proto__:obj1
}
