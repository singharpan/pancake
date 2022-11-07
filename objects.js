const person={
    name:'ram'
}
const person2={
    ...person
}

person2.name='hero'
console.log(person2,person)