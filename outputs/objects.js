// "use non-strict"
const obj1={
    a:10,
    b:12,
    e:{
        f:90
    },
    c:{
        d:{
            x:20
        }
    }
}
let obj2= Object.assign({},obj1)
obj2.e.f=14;
// obj3={...obj1}
// obj3.a=1
console.log(obj1)