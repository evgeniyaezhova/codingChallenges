// https://leetcode.com/problems/reshape-the-matrix/

// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

var matrixReshape = function(nums, r, c) {
    
    let or = nums.length;
       let oc = nums[0].length;
       let newMatrix = [];
       let newEl = [];
       let count = 0;
       if(r*c !== or*oc){
         return nums;
       } else {
         nums = [].concat(...nums)
         for(let i = 0; i < r*c; i++){
           newEl.push(nums[i]);
           count++;
         
          if(count === c){
           newMatrix.push(newEl);
         
           newEl = [];
           count = 0
         }
         }
          
       }
   
   return newMatrix
   };

//    Runtime: 72 ms, faster than 97.97% of JavaScript online submissions for Reshape the Matrix.
// Memory Usage: 40.1 MB, less than 100.00% of JavaScript online submissions for Reshape the Matrix.