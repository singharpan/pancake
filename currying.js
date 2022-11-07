// Currying is the function that takes one argument at a time and returns another function
//expecting the next argument
//It is just a conversion of functions from one form to another

//Defination
//Currying functions are constructed by  chaining closures by immedialtely returning
// there inner function symontanisly

function addition(a, b) {
  return a + b;
}

function additionCurrying(a) {
  return function (b) {
    return a + b;
  };
}

const additionCurrying3 = (a) => {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
// console.log(additionCurrying(34)(2))
const r1 = additionCurrying(10);
const r2 = additionCurrying(12);

const r31 = additionCurrying3(4);
const r32 = additionCurrying3(5);
const r33 = additionCurrying3(9);

console.log(r31(1)(2), r33(4)(4));

//Real Example

const user = {
  name: "ram",
  age: 45,
};

const getUserInfo = (info) => {
  return (type) => {
    return info[type];
  };
};

console.log(getUserInfo(user)('age'))

//real Example Over
//

// Why should we use currying
// 1> To avoid passing same variable again and again
// 2> to create higher order function 
// 3> to make your function pure and less prone to error

//Question 1
// make a function that do the operation type that is passed

function evaluate(operation) {
  return (a) => {
    return (b) => {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}
console.log(evaluate('divide')(10)(5))

// Q2
//Infinite currying
// add(34)(2)(4)(5)()

function addInfinteCurrying(a) {
  return function (b) {
    if (b) return addInfinteCurrying( a + b );
    return a;
  };
}

console.log(addInfinteCurrying(1)(2)(3)(4)(),'infinte')

// convert normal function into currying function
// Converts f(a,b,c) into f(a)(b)(c)

// @@@@@@@   IMPORTANT  @@@@@@@@ //
//In currying the number of arguments is equal to number fo function returns
//**** ************************/

//args will be array of all the arguments

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum=(a,b,c)=>a+b+c;

const totalSum=curry(sum)

console.log(totalSum(1)(6)(5))

