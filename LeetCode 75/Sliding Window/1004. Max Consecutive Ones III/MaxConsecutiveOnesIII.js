// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

let nums1 = [1,1,1,0,0,0,1,1,1,1,0], k1 = 2;
let output1 = 6;

let nums2 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k2 = 3;
let output2 = 10;

var longestOnes = function(nums,k){
    let windowStart = 0;
    let windowEnd = 0;

    // Loop through array
    while (windowEnd < nums.length) {
        // Start moving through array with the right/end of the window
        if (nums[windowEnd] === 0) { // If the value is 0, decrease k by 1, this means we are flipping the 0 to a 1
            k--;
        }
        // If k is less than 0, we check if the left/start of window is equal to 0, if so we can increase k by 1 and increment the window start
        if (k < 0) {
            if (nums[windowStart] === 0) {
                k++;
            }
            windowStart++;
        }
        // If k is not less than 0, then we just keep incrementing the right window
        windowEnd++;
    }
    return windowEnd - windowStart;
};

console.log("Output:", longestOnes(nums1,k1));
console.log("Expected:", output1);
console.log("================");

console.log("Output:", longestOnes(nums2,k2));
console.log("Expected:", output2);
console.log("================");

