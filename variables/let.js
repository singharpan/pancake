//For block scope the memory is allocated based on block

function let_test(){
    let a='Hello';
    if(true){
       a='Hi'
        console.log(a,'in')
    }
    console.log(a,'out')
}
let_test()

