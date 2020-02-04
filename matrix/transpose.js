// https://leetcode.com/problems/transpose-matrix/

// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.


var transpose = function(A) {
    let newMatrix = [];
   for(let i = 0; i < A[0].length ; i++){
       let newRow = []
       for(let j = 0; j < A.length; j++){
           newRow.push(A[j][i])
       }
       newMatrix.push(newRow)
   }
    return newMatrix
};

// Runtime: 68 ms, faster than 88.16% of JavaScript online submissions for Transpose Matrix.
// Memory Usage: 37.6 MB, less than 33.33% of JavaScript online submissions for Transpose Matrix.