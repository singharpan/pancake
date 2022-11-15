const arr = [1,2,3,4,5,6,7,8,4,5,6,5,3]
let count={}
for (let i = 0 ;i < arr.length ; i++){
if(count[arr[i]]){
    // arr.splice(arr[i],1)
    

    count[arr[i]]= count[arr[i]] + 1
    console.log(i,arr[i])
    arr.splice(i,1)
}else{
    count[arr[i].toString()] = 1

}
}
console.log(arr)