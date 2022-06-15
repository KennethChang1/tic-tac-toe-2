const array = [1,2,3,4];
const b = [1,2,3,4];

const includes = array.includes(b);
const test = array.every(r => b.includes(r));


console.log(includes);
console.log(test);