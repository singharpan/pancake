// var p = new Promise((resolve, reject) => {
//         reject(Error('The Fails!'))
//       })
//       .catch(error => console.log(error))
//       .then(error => console.log(error))
// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//   }) 

var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address); 
  }
}

// var getAddress = obj1.getAddress;
// var obj2 = {name:"akshay"};
// obj2.getAddress();

// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
// .then(data => {
//       return data.toUpperCase()
//     })
//   .then(data => {
//     console.log(data)
//   })


const p1=new Promise((resolve,reject)=>{
  resolve('This is promise 1')
})
const p2=new Promise((resolve,reject)=>{
  resolve('This is promise 2')
  reject('hey')
})

const p3=new Promise((resolve,reject)=>{
  resolve('This is promise 3')
})

let allPromises=Promise.all([p1,p2,p3])
allPromises.then((res)=>{
  console.log(res,'res')
}).catch((err)=>{
  console.log(err)
})