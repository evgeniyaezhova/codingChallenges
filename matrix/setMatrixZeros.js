// https://leetcode.com/problems/set-matrix-zeroes/

// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

var setZeroes = function(matrix) {

    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length; j++){
            if(!matrix[i][j]){
                 for(let x = 0; x < matrix.length; x++){
                   if(matrix[x][j]){
                   matrix[x][j] = "e"

                   }
            
               }  
                for(let e = 0; e < matrix[i].length; e++){
                  if(matrix[i][e]){
                    matrix[i][e] = "x"
                  }

            }         
            }
        } 
        }
        
    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length; j++){
          if(matrix[i][j] === "e" || matrix[i][j] === "x"){
            matrix[i][j] = 0 
          }
        }}
    
    return matrix    

};


// Runtime: 76 ms, faster than 93.68% of JavaScript online submissions for Set Matrix Zeroes.
// Memory Usage: 37.4 MB, less than 70.00% of JavaScript online submissions for Set Matrix Zeroes.