// These are the function whose execution can be paused and resumed
// Every yield is called on next call , one yield is called at a time
// FUNCTION EXECUTION STOPS AT "YIELD"
// This function is not directly called ,we have the function instance
// and we call the instance with "next"

//Generator functions returns a "Iterator" which is used to stop/start the function
//NORMAL FUNCTION CAN'T BE STOPPED IN THE MIDDLE

// Use Case 1
// Async functions which call next when the async function is done
// Redux Saga is library which aim to handling side effects (async things like data fetching)
// solely responsible for side effect

// *** Generators are used to make your async code look more
//synchrouns making it easier to read ,write and test 


//Basic example

function* hey() {
  let num = 100;

  while (num) {
    num++;
    yield num;
  }
}

const a = hey();
function generator() {
  document.getElementById("generator").innerText = a.next().value;
}
