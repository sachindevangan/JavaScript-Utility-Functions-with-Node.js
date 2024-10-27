/* Todo: Implment the functions below and then export them
using the ES6 exports syntax. 
DO NOT CHANGE THE FUNCTION NAMES
*/

export let palindromes = (string) => {
if (!string) {
throw new Error("Array does not exist");
}

if (!Array.isArray(string)) {
throw new Error("Input is not an array");
}

if (string.length === 0) {
throw new Error("Array is empty");
}

let object = {};

for (let str of string) {
if (typeof str !== "string") {
throw new Error("Array element is not a string");
}

if (typeof str === "number") {
throw new Error("Array element is a number, only string are allowed");
}

if (!str.trim()) {
throw new Error("Array element is an empty string");
}

if (!str.match(/\w/)) {
throw new Error("Array element does not have any alphanumeric characters");
}

let string = str.toLowerCase();
let remove = string.replace(/\W/g, '');
let reverseString = remove.split('').reverse().join('');

let isPalindrome = remove === reverseString;
object[remove] = isPalindrome;

}

return object;
};

export let censorWords = (string, badWordsList) => {
if (!string) {
throw new Error("Input string does not exist");
}

if (!string.trim()) {
throw new Error("Input string cannot be an empty string");
}

if (!Array.isArray(badWordsList)) {
throw new Error("The badWord List is not an Array");
}

if (badWordsList.length === 0) {
throw new Error("badWord List cannot be empty");
}

for (let word of badWordsList) {
if (typeof word !== "string") {
throw new Error("each element in the bad words list must be a string");
}
}

string = string.toLowerCase();
badWordsList = badWordsList.map(word => word.toLowerCase());

for (let word of badWordsList) {
if (string.indexOf(word) === -1) {
throw new Error("badwordList element cannot be found in the given string");
}
}

let specialCharacters = ["!", "@", "$", "#"];
let index = 0;
let censoredInput = string;

badWordsList.forEach(badWord => {
let i = -1;
while ((i = censoredInput.indexOf(badWord, i + 1)) >= 0) {
let censoredBadWord = "";
for (let j = 0; j < badWord.length; j++) {
censoredBadWord += specialCharacters[index % specialCharacters.length];
index++;
}
censoredInput = censoredInput.replace(badWord, censoredBadWord);
}
});

return censoredInput;
};


export let distance = (string, word1, word2) => {
if (!string || !word1 || !word2) {
throw new Error("All parameters must exist");
}
if (typeof string !== "string" || typeof word1 !== "string" || typeof word2 !== "string") {
throw new Error("All parameters must be of type string");
}
if (!string.trim().length || !word1.trim().length || !word2.trim().length) {
throw new Error("All parameters must not be empty strings");
}
let words = string.replace(/[^\w\s]/gi, '').toLowerCase().split(" "); // remove punctuation and convert to lowercase
if (words.length < 2) {
throw new Error("String must be at least two words long");
}
if (word1.toLowerCase() === word2.toLowerCase()) { // make word1 and word2 case-insensitive
throw new Error("word1 and word2 must not be the same");
}
let word1Index = -1;
let word2Index = -1;
words.forEach((word, index) => {
if (word === word1.toLowerCase()) { // make word1 case-insensitive
word1Index = index;
}
if (word === word2.toLowerCase()) { // make word2 case-insensitive
word2Index = index;
}
});
if (word1Index === -1 || word2Index === -1) {
throw new Error("word1 and word2 must exist in the string");
}
if (word1Index > word2Index) {
throw new Error("word1 must appear before word2 in the string");
}
return word2Index - word1Index;
};

