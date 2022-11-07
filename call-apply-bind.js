// we can do function borrowing from other objects and 
// use that with the data of some other objects
// Every function in javascript have access to special function called as call ,apply ,bind
const getFullName= function (hometown,state){
    console.log(this.firstname,'hru',this.lastname ,hometown,state)
    return this.firstname + " " + this.lastname
}

let person1={
    firstname:'rahul',
    lastname:'khera',
    
}

let person2={
    firstname:'aman',
    lastname:'pandey'
}


// getFullName.call(person1)
getFullName.call(person2,'noida','UP')
getFullName.apply(person1,['delhi',"UT"])
// const result1=person1.getFullName()
// const result2=person2.getFullName()

// console.log(result1,result2)


//$$$$$$$$$$$$$$$$$//
//In call and apply the only difference is how we pass the argument
//In call we send argument indivually and in apply we pass it as an array

// *****//
// The Difference between (call ,apply) and bind is that in call and apply we directly call the function
//But in bind method ,bind , binds the method with a object and return the copy of the method


//bind method
let fullname=getFullName.bind(person1)
// it will create a copy of getFullName function and it will bind it to person1 object
// and will return a function and which can be called later
console.log(fullname,'fullname')

//Bind gives a copy of the function which can be invoked later


