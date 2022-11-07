//This keyword behaviour in strict mode
'use strict'
// Senerio 1 (this console in node (strict) environment gives empty object)
console.log(this)  //returns a empty object

//Scenerio 2 (this inside a function)
function showThis(){
    console.log(this , 'inside function') //returns "undefined" in node strict envirnment
}
showThis() 

//Scenrio 3 (this inside a Object)

let object={
    name:'Ram',
    f:function (){
        console.log(this ,'inside object')
        //return object itself
    }
}
object.f()

//Scenrio 4 (inside nested function in object)


let object2={
    name:'Ram',
    f:function (){
        function g(){
            console.log(this)
            //returns undefined
        }
        g()
    }
}
object2.f()