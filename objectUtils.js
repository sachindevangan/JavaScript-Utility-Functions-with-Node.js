/* Todo: Implment the functions below and then export them
using the ES6 exports syntax. 
DO NOT CHANGE THE FUNCTION NAMES
*/

export let areObjectsEqual = (...args) => {
if (args.length < 2) {
throw new Error("There must be at least two objects passed into the function");
}

for (let i = 0; i < args.length; i++) {
if (typeof args[i] !== "object" || Array.isArray(args[i]) || args[i] === null) {
throw new Error("Input must be an object");
}
}

function compare(obj1, obj2) {
let obj1Keys = Object.keys(obj1);
let obj2Keys = Object.keys(obj2);

if (obj1Keys.length !== obj2Keys.length) {
return false;
}

for (let i = 0; i < obj1Keys.length; i++) {
let key = obj1Keys[i];

if (obj1[key] !== obj2[key]) {
if (typeof obj1[key] === "object" && obj1[key] !== null) {
if (!compare(obj1[key], obj2[key])) {
return false;
}
} else {
return false;
}
}
}

return true;
}

let baseObject = args[0];

for (let i = 1; i < args.length; i++) {
if (!compare(baseObject, args[i])) {
return false;
}
}

return true;
};


export let calculateObject = (object, funcs) => {

if (!object){
throw new Error("Input object does not exist");
} 

if(typeof object !== "object") {
throw new Error("Input is not an object");
}
if (!funcs){
throw new Error("Input function does not exist");
} if (!Array.isArray(funcs)) {
throw new Error("Input func is not an array");
}
for (let key in object) {
if (typeof object[key] !== "number") {
throw new Error("object values must be numbers");
}
}
if (funcs.length === 0) {
throw new Error("funcs array must have at least one element");
}
for (let i = 0; i < funcs.length; i++) {
if (typeof funcs[i] !== "function") {
throw new Error("funcs array elements must be functions");
}
}

let result = {};
for (let key in object) {
let output = object[key];
for (let i = 0; i < funcs.length; i++) {
output = funcs[i](output);
}
result[key] = +output.toFixed(2);
}
return result;
};

export let combineObjects = (...args) => {
if (!Array.isArray(args)) {
throw new Error("Input must be an array of objects");
}
if (args.length === 0) {
throw new Error("Array cannot be empty");
}
args.forEach((obj) => {
if (typeof obj !== "object" || obj === null) {
throw new Error("Array must only contain objects");
}
});
return args.reduce((result, obj) => {
Object.keys(obj).forEach((key) => {
if (!result.hasOwnProperty(key)) {
let count = 0;
args.forEach((obj2) => {
if (obj2.hasOwnProperty(key)) count++;
});
if (count > 1) result[key] = obj[key];
}
});
return result;
}, {});
};
