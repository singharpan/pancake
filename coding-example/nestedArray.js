const arr = ["abc", ["cfc"], [10, 12], "hey"];
const result = [];

const simplify = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      simplify(list[i]);
    } else {
      result.push(list[i]);
    }
  }
};
simplify(arr)
console.log(result)