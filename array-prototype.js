Array.prototype.add = function (value) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + value);
  }
  return arr;
};

const arr = [12, 23, 4, 43];
console.log(arr.add(5));
