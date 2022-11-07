//WILL USE function prototype here
//calling a function for any object is done in bind
Function.prototype.mybind = function (...args) {
  let obj = this; //points to current object
  params = args.slice(1);
  return function () {
    obj.apply(args[0], params);
  };
};

let person={
    name:'Adam',
    age : 35
}
function getDetails(city,state){
    console.log(`${this.name} ${this.age} in ${city} in ${state}`)
    return `${this.name} ${this.age}`
}
const getDetailsBind=getDetails.mybind(person,'LKO','UP')
getDetailsBind()

