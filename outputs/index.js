// https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();
// console.log(x)
// console.log(output)

var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
// console.log(trees)

(function(){
	var arrayNumb = [2, 8, 15, 16, 23, 42];
	arrayNumb.sort();
	console.log(arrayNumb);
})();