const map={}
const string="Hello  world";
const array=string.split("")
array.filter((ex)=> ex.trim() ).forEach((i)=> map[i] ? map[i] = map[i] + 1 : map[i] = 1)
console.log(map,'map')

