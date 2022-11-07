const myArray = [20,55, 1,23, 27];
let max=myArray[0]
let min=myArray[myArray.length-1]

for(let i = 0 ; i < myArray.length ; i++ ){
    if( !(max > myArray[i])){
        max=myArray[i]
    }
    else if(myArray[i] < min)
    min=myArray[i]
}
console.log(max,min)

