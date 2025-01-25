const add = (a, b) => {
    return a + b;
}
const mult = (a, b) => {
    return a*b;
}
const sub = (a, b)=> {
    return a - b
}

// module.exports = add;
// module.exports = mult;

// module.exports.add = add; //module.exports.property
// module.exports.mult = mult; //module.exports.property

module.exports = {add, mult, sub}// export all using {}

 // note always module.exports not export

/*  module.exports is a single object or value.
When you reassign module.exports (e.g., module.exports = add), it completely replaces whatever was previously assigned.
If you reassign it again (module.exports = mult), the previous value (add) is replaced with mult.
*/