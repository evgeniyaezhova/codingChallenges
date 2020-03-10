//https://leetcode.com/problems/duplicate-zeros/

var duplicateZeros = function(arr) {
    let length = arr.length
    for(let i = 0; i < arr.length; i++){
        if(!arr[i]){
          arr.splice(i+1, 0, 0)
          i++
          arr.pop()
        }
    }
  
  };