const transpose = function (matrix) {
  let transposedMatrix = [
    // arrays pushed into here
  ];

  // only for the 0th array, make a var for it so we only look through it
  let firstRow = matrix[0];

  // Loop through first row array
  for (const r of firstRow) {
    transposedMatrix.push([r]);
  }
  // push new arrays into transposedMatrix
  // look at the next arrays, push them into the respective positions
  // based on column number, push array element into respective array that was created within transposedMatrix
  for (let r = 1; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      transposedMatrix[c].push(matrix[r][c]);
    }
  }

  // return the transposedMatrix;
  return transposedMatrix;
};

const wordSearch = (twoDArray, word) => {
    // 1. initially, we take a 2D array and map it out to a 1D array with just strings
    const horizontalJoin = twoDArray.map((nestedArray) => nestedArray.join(""));
    // console.log(horizontalJoin);
    
    // 2. we then look at each string in our 1D array, and if our word is included in that string, return true => exits.
    for (string of horizontalJoin) {
        if (string.includes(word)) {
            return true;
        }
    }
    
    // Edge Case 2: find the word VERTICALLY
    // A. Manipulate the data first, transpose it -> 
    // if the word exists... it would just look like a horizontal word in an array
    // We should only get here if we couldn't find the word horizontally initially
    const verticalJoin = transpose(twoDArray).map((nestedArray) => nestedArray.join(""));
    console.log(verticalJoin);
    
    // B. Then we find it just like normal
    for (string of verticalJoin) {
        if (string.includes(word)) {
            return true;
        }
    }
    
  // Edge case 1: what if the arrays are empty or words not found? => return false
  return false;
};

module.exports = wordSearch;

// Collaborated with:
// @cindyc0106 on Github
