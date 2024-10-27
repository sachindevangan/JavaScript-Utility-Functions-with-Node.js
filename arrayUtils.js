/* Todo: Implment the functions below and then export them
using the ES6 exports syntax. 
DO NOT CHANGE THE FUNCTION NAMES
*/

export let sortAndFilter = (array, sortBy1, sortBy2, filterBy, filterByTerm) => {
if (!Array.isArray(array)) {
throw new Error('The first argument should be an array.');
}
if (!sortBy1 || typeof sortBy1 !== 'object' || sortBy1.length !== 2) {
throw new Error('The second argument should be a two-element array.');
}
if (!sortBy2 || typeof sortBy2 !== 'object' || sortBy2.length !== 2) {
throw new Error('The third argument should be a two-element array.');
}
if (!filterBy || typeof filterBy !== 'string') {
throw new Error('The fourth argument should be a string.');
}

let filteredArray = array.filter(person => person[filterBy] === filterByTerm);
if (!filteredArray.length) {
throw new Error('No elements were found');
}

let sortedArray = filteredArray.sort((a, b) => {
let firstSort;
if (sortBy1[1] === 'asc') {
firstSort = a[sortBy1[0]].localeCompare(b[sortBy1[0]]);
} else if (sortBy1[1] === 'desc') {
firstSort = b[sortBy1[0]].localeCompare(a[sortBy1[0]]);
} else {
throw new Error('Invalid order');
}

if (firstSort === 0) {
if (sortBy2[1] === 'asc') {
return a[sortBy2[0]].localeCompare(b[sortBy2[0]]);
} else if (sortBy2[1] === 'desc') {
return b[sortBy2[0]].localeCompare(a[sortBy2[0]]);
} else {
throw new Error('Invalid order');
}
}

return firstSort;
});

return sortedArray;
};
  

export let merge = (...args) => { 
if (args.length === 0) {
throw new Error("At least one array is required as input");
}

for (let i = 0; i < args.length; i++) {
if (!Array.isArray(args[i])) {
throw new Error("Input argument is not an array");
} else if (args[i].length === 0) {
throw new Error("Input argument is an empty array");
} else {
for (let j = 0; j < args[i].length; j++) {
let element = args[i][j];
if (element === []) {
throw new Error("Input array contains an empty array");
}
if (typeof element !== "string" &&
typeof element !== "number" && 
!Array.isArray(element) || 
(typeof element === "number" && isNaN(element))) {
throw new Error("Input element is not appropriate");
}
}
}
}

let concatedArray = args.flat(Infinity);

concatedArray.sort((a, b) => {
if (typeof a === "number" && typeof b === "number") {
return a - b;
} else if (typeof a === "string" && typeof b === "string") {
if (a > b) {
return 1;
} else if (a < b) {
return -1;
} else {
return 0;
}
} else {
if (typeof a === "number") {
return -1;
} else {
return 1;
}
}
});

return concatedArray;
};

export let matrixMultiply = (...args) => {
// Check if at least two inputs are provided
if (args.length < 2) {
throw new Error("At least two inputs are required");
}

let result = args[0];
for (let i = 1; i < args.length; i++) {
let matrix1 = result;
let matrix2 = args[i];

// Check if each input is an array
if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
throw new Error("Each input must be an array");
}

// Check if each array is not empty
if (matrix1.length === 0 || matrix2.length === 0) {
throw new Error("Each array must not be empty");
}


// Check if the number of columns in matrix1 is equal to the number of rows in matrix2
let m1Rows = matrix1.length;
let m1Cols = matrix1[0].length;
let m2Rows = matrix2.length;
let m2Cols = matrix2[0].length;

if (m1Cols !== m2Rows) {
throw new Error("Matrix multiplication is not possible");
}

// Check if each element is a number
for (let j = 0; j < m1Rows; j++) {
for (let l = 0; l < m1Cols; l++) {
if (typeof matrix1[j][l] !== "number" || isNaN(matrix1[j][l]) ) {
throw new Error("Each element must be a number");
}
}
}

for (let l = 0; l < m2Rows; l++) {
for (let k = 0; k < m2Cols; k++) {
if (typeof matrix2[l][k] !== "number" || isNaN(matrix2[l][k])) {
throw new Error("Each element must be a number");
}
}
}

// Perform matrix multiplication
result = Array(m1Rows).fill(0).map((_, i) => Array(m2Cols).fill(0).map((_, j) => 
matrix1[i].reduce((sum, el, k) => sum + el * matrix2[k][j], 0)
));
}

return result;
};
