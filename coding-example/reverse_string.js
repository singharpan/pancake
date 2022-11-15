let str = "i love javascript";

let splittedString = str.split(" ");
let newString = [];
for (let char = splittedString.length - 1; char >= 0; char--) {
  newString.push(
    `${splittedString[char].charAt(0).toUpperCase()}${splittedString[
      char
    ].slice(1)} `
  );
}
console.log(newString.join(" ")); //Javascript Love I
