const add = (...args) => {
  return args.reduce((sum, ele) => {
    return sum + ele;
  }, 0);
};
const result=add(4,5,6,7,8)
console.log(result,'result') 