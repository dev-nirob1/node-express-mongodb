// const add = require('./math') //commonJs
// const mult = require('./math')
const {add, mult, sub} = require('./math')
// const math = require('./') // also possible to access module data using dot notation.

console.log(add(2, 3));
console.log(mult(2, 3));
console.log(sub(12, 3));