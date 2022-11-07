//This keyword behaviour in non-strict mode

// Senerio 1 (this console in node (non-strict) environment gives window object)
console.log(this)  //returns a window object

//Scenerio 2 (this inside a function)
function showThis(){                
    console.log(this , 'inside function') //returns a window object in node non-strict envirnment
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
            //retuns the window object
        }
        g()
    }
}
object2.f()