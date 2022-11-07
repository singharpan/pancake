console.log('Program Start')

setTimeout(()=>{
console.log('I am setTimeout ')
},1000)

Promise.resolve().then((val)=>{
    console.log('Promise output')
})

console.log('Program End')

//there is callback queue and microtask queue
//promise goes in microtask queue and settimeout goes into callback queue 
//and microtask queue have high priority