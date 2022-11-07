// Approach 1
// Update counter
// let count=0
// const updateCount=()=>{
// count++
// }

// updateCount()
// updateCount()
// console.log(count)
/******But here problem is the count can be overrided anyover */

// Approach 2
//Function get out from call stack once function get called
//but in case where there is nested function , the function get out of call stack
//but variable stay inside the call the stack
//here the problem is that after every call the function get out of call stack
//and variable also get out of call stack
//value always stays 1 in below example
// const updateCount=()=>{
//     let count =0;
//     count ++
//     console.log(count)
// }

// updateCount()
// updateCount()

//Approach 3
//Here is solution is closure

// const updatedCounter=()=>{
//     let count =0;

//     return ()=>{
//         count ++
//         console.log(count)
//     }
// }

// const counter= updatedCounter()
// counter()
// counter()
// counter()

//Approach 4
//when we want to hide the private variables and function and
//give public interface to the user

const CartCounter = () => {
  let count = 0;

  function updateCount(value) {
    count += value;
  }

  return {
    increment() {
      updateCount(1);
    },
    decrement() {
      updateCount(-1);
    },
    value() {
      return count;
    },
  };
};

const counterValue = CartCounter();
counterValue.increment();
counterValue.increment();
console.log(counterValue.value());

//UseState using Closure
const useState = (initial) => {
  let _state = initial;

  function setState(value) {
    _state = value;
  }
  function getState() {
    return _state;
  }

  return [getState, setState];
};

function Counter() {
  const [state, setCount] = useState(0);

  return {
    click() {
      setCount(5);
    },
    render() {
      console.log("value: ", state());
    },
  };
}

const counter = Counter();
counter.click();
console.log(counter.render(), "state");
