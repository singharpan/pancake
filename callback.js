//  Callback issues

// 1> Callback Hell
// 2> Inversion of control (giving control of our code to another code)

// CallBack (code starts grow horizontally instead of vertically)
//  Unreadable and hard to maintain

const carts = ["shoes", "shirts", "paints"];

const createOrder =
  (carts,
  (orderId) => {
    proceedPayment(orderId, () => {
      showOrderSummary(() => {
        updateWallet();
      });
    });
  });

console.log("first");

function second() {
  console.log("second");
}

setTimeout(function second() {
  console.log("second");
}, 5000);

console.log("third");
