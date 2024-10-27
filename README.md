
---

# JavaScript Utility Functions with Node.js

## Description
This project contains a series of JavaScript utility functions organized into modules for arrays, strings, and objects. These functions aim to improve understanding of JavaScript syntax, error handling, and Node.js modules. Each function has extensive error handling to validate inputs and throw descriptive errors if validation fails.

## Features
- **Array Utilities (`arrayUtils.js`)**:
  - `sortAndFilter`: Sorts and filters an array of objects based on provided fields and values.
  - `merge`: Merges multiple arrays, sorts them in numerical and alphabetical order, and handles nested arrays.
  - `matrixMultiply`: Performs matrix multiplication on input arrays representing matrices.
- **String Utilities (`stringUtils.js`)**:
  - `palindromes`: Checks an array of strings for palindrome values.
  - `censorWords`: Censors specified words in a string by replacing them with special characters.
  - `distance`: Finds the minimum index distance between two words in a string.
- **Object Utilities (`objUtils.js`)**:
  - `areObjectsEqual`: Checks deep equality among multiple objects.
  - `calculateObject`: Applies a series of functions to the values of an object and returns a new object with results.
  - `combineObjects`: Combines objects by including keys appearing in at least two objects.
- **Error Handling**: Extensive error checks ensure proper input validation, with descriptive error messages for incorrect inputs.

## Installation
1. Clone the repository.
   ```bash
   git clone https://github.com/sachindevangan/JavaScript-Utility-Functions-with-Node.js
   ```
2. Navigate to the project directory.
   ```bash
   cd js-utility-functions
   ```
3. Initialize Node.js package (if not already done).
   ```bash
   npm init
   ```
4. Run the application.
   ```bash
   npm start
   ```

## Usage
- Import the modules and use each function by calling it with appropriate parameters. Example usage and test cases are in `app.js`.

## Example
```javascript
const arrayUtils = require('./arrayUtils');
const result = arrayUtils.sortAndFilter([...], ['field', 'asc'], ...);
console.log(result);
```

## License
This project is licensed under the MIT License.

---