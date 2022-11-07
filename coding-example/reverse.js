let number=[{name:'a'},{name:'b'},{name:'c'},{name:'d'},{name:'e'},{name:'f'}]
// let reverseNumbers=number.reverse()
// console.log(reverseNumbers,number)

// Reverse method modifies the original array

const revered=[]

for(let i = number.length - 1 ; i >=0 ; i--){
    revered.push(number[i])
}
// console.log(revered,'rev')

function customReverse(arr){
    
let leftIndex=0;
let rightIndex=arr.length - 1 
while(leftIndex < rightIndex){
    let temp=arr[leftIndex];
    arr[leftIndex]=arr[rightIndex];
    arr[rightIndex]=temp;
    leftIndex++ ;
    rightIndex--
}

}
console.log(customReverse(number))
console.log(number)