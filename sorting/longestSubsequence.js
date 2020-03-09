//https://leetcode.com/problems/longest-continuous-increasing-subsequence/submissions/

var findLengthOfLCIS = function(nums) {
  let currLength = 1;
  let maxLength = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) currLength++;
    if (currLength > maxLength) maxLength = currLength;
    if (nums[i] >= nums[i + 1]) currLength = 1;
  }
  
  return maxLength;
};