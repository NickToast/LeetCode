// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

let nums1 = [1,12,-5,-6,50,3], k1 = 4;
let output1 = 12.75000;

let nums2 = [5], k2 = 1;
let output2 = 5.00000; 

var findMaxAverage = function(nums, k) {
    let maxSum = -Infinity;
    let soFar = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        soFar += nums[windowEnd];

        if (windowEnd - windowStart === k - 1) {
            let avg = soFar/k;
            maxSum = Math.max(maxSum, avg);
            soFar -= nums[windowStart];
            windowStart++;
        }
    }
    return maxSum;
};

// Time complexity: O(n) linear time because we go through each variable in the array once
// Space complexity: O(1) constant space because we have variables that store values, but we do not store multiple values in the variables

console.log("Output:", findMaxAverage(nums1,k1));
console.log("Expected:", output1);
console.log("=========");

console.log("Output:", findMaxAverage(nums2,k2));
console.log("Expected:", output2);
console.log("=========");