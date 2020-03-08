// https://leetcode.com/problems/minimum-absolute-difference/

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

var minimumAbsDifference = function(arr) {
    let sorted = arr.sort((a, b)=> a-b)

    let minDiff = minAbsDiff(arr);

    let resultPairs = [];
    
    for(let i = 0 ; i < sorted.length; i++){
        if(Math.abs(sorted[i] - sorted[i+1]) == minDiff){
            resultPairs.push([sorted[i],sorted[i+1]])
        }
    }
    
    return resultPairs; 
};

const minAbsDiff = (sorted) => {
    let minDiff = Number.POSITIVE_INFINITY;
    for(let i= 0; i < sorted.length; i++) {
        if(Math.abs(sorted[i] - sorted[i+1]) < minDiff){
            minDiff = Math.abs(sorted[i] - sorted[i+1])
        }
    }
    return minDiff;
}



// const merge = (left, right) => {
//     let resultArr = []
//     let leftIdx = 0
//     let rightIdx = 0
//     while(leftIdx < left.length && rightIdx < right.length){
//       if(left[leftIdx] < right[rightIdx]){
//       resultArr.push(left[leftIdx])
//       leftIdx++
//       } else {
//          resultArr.push(right[rightIdx])
//          rightIdx++
//       }
//     }
//     return resultArr.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
//   }
  
//   const sortArr = (arr) => {
//     if(arr.length <= 1){
//       return arr
//     }
//     let middleIdx = Math.floor((arr.length)/2)
//     let left = arr.slice(0,middleIdx)
//     let right = arr.slice(middleIdx, arr.length)
//     return merge( sortArr(left), sortArr(right))
//   }
  
//   var minimumAbsDifference = function(arr) {
//     let sortedArr = sortArr(arr)
//     let minDiff = Infinity
//     let output = []
//     for(let i = 0; i < sortedArr.length-1 ; i++){
//       let diff = sortedArr[i+1] - sortedArr[i]
//       console.log(diff)
//       if(diff < minDiff){
//         minDiff = diff
//       } 
//     }
//     for(let i = 0; i < sortedArr.length-1; i++){
//       if(sortedArr[i+1] - sortedArr[i] === minDiff){
//         output.push([sortedArr[i], sortedArr[i+1]])
//       }
//     }
//   return output
//   };
  