const { add } = require("./export.ts"); // named import
const maths = require("./export.ts"); //  imports all functionality within an object
console.log(add(2, 3));
console.log(maths.add(3, 4));
