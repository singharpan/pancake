const person = {
  name: "Rahul",
  age: 20,
  address: {
    current: {
      city: "Noida",
      state: "UP",
    },
    permanent: {
      city: "Azamgarh",
      state: "UP",
    },
  },
};
const flattenObject=(obj,parent,res={})=>{
for(let key in obj){
    let propName=parent ? parent + '_' + key : key 
    if(typeof obj[key]== 'object'){
        flattenObject(obj[key],propName,res)
    } 
    else {
        res[propName]=obj[key]
    }
}
return res
}
console.log(flattenObject(person))