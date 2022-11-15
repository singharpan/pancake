let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumArray = (arr, sum) => {
  let hash = {};
  let array = [];

  arr.forEach((value) => {
    let diff = sum - value;
    if (hash[diff.toString()]) {
      array.push([value, diff]);
    } else {
      hash[value.toString()] = value;
    }
  });

  return array;
};

const result = sumArray(arr, 8);
console.log(result);
