// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

let nums1 = [1,1,0,1], output1 = 3;
let nums2 = [0,1,1,1,0,1,1,0,1], output2 = 5;
let nums3 = [1,1,1], output3 = 2;

var longestSubarray = function(nums) {
    let windowStart = 0;
    let k = 1; // k represents the maximum number of elements we can delete
    let maxLength = 0;

    // Loop through array
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        // If right window equals 0, decrement k
        if (nums[windowEnd] === 0) {
            k--;
        }
        // If k is less than 0, that means we've deleted 1 too many elements, so we keep incrementing the left window until we get to a 0, so we can increment k again
        if (k < 0) {
            if(nums[windowStart] === 0) {
                k++;
            }
            windowStart++;
        }
        // Updates the maximum length each time the loop goes through
        maxLength = Math.max(maxLength, windowEnd - windowStart);
    };
    return maxLength;
};


// Testing a different solution (non sliding window technique)
var longestSubarray2 = function(nums) {
    let prev = 0, curr = 0, i = 0;
    let maxLength = 0;
    
    while (i < nums.length) {
        if (nums[i] == 1) {
            curr++;
            i++;
        }
        if (nums[i] == 0) {
            maxLength = Math.max(maxLength, curr+prev);
            prev = curr;
            curr = 0;
            i++;
        }
        maxLength = Math.max(maxLength, prev+curr);
    }
    return maxLength==nums.length ? maxLength - 1: maxLength; // ternary operator for edge case where there are no 0's in the array, so our answer will just be nums.length - 1
};

console.log("Output:", longestSubarray2(nums1));
console.log("Expected:", output1);
console.log("================");

console.log("Output:", longestSubarray2(nums2));
console.log("Expected:", output2);
console.log("================");

console.log("Output:", longestSubarray2(nums3));
console.log("Expected:", output3);
console.log("================");