const sum = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const multiple = (a, b) => {
    return a * b;
}
const devide = (a, b) => {
    return a / b;
}


// commonjs module export.
// module.exports = {sum, sub, multiple, devide} 
// module.exports = sum;

// es-module exports 
// export default sum; //single export 
export {sum, sub, multiple, devide}; //aggregated export