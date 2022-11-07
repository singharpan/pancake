We have two environment in JS ...ie  Browsers and Node js
case 1 : console.log(this)
case 2 : function showThis(){
    console.log(this , 'inside function')
}
case 3 : let object={
    name:'Ram',
    f:function (){
        console.log(this ,'inside object') }
}
object.f()
case 4 : let object2={
    name:'Ram',
    f:function (){
        function g(){
            console.log(this)
        }
        g()
    }
}
object2.f()



|            | non-strict mode      |  strict mode | 
|    ---     |      ---             |---|---|---|
|  Browsers  |  1: window object    | 1: window object
|            |  2: window object    | 2: undefined
|            |  3: object itself    | 3: object itself
|            |  4: window object    | 4: undefined
|            |                      |
|   Node js  |  1: {} empty object  | 1: {} empty object
|            |  2: global object    | 2: undefined
|            |  3: object itself    | 3: object itself
|            |  4: global object    | 4: undefined