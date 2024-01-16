// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

let nums1 = [1,2,3,4];
let k1 = 5;
let output1 = 2;

let nums2 = [3,1,3,4,3];
let k2 = 6;
let output2 = 1;

var maxOperations = function(nums, k) {
    // Two pointers, one counter to count the number of operations
    // Sort the array first
    nums.sort((a,b) => a-b); // Sort the array in increasing order
    // Sorting array has a time complexity of O(nlogn)

    // count variable and our two pointers
    let count = 0;
    let left = 0, right = nums.length - 1;

    // While loop
    while (left < right) {
        // Create variable tempSum to compare the value of the two numbers to k
        const tempSum = nums[left] + nums[right];
        // If tempSum is equal to our k, we want to increase the counter by one, and increment/decrement the left/right pointers
        if (tempSum == k ){
            count++;
            left++;
            right--;
        } else if (tempSum < k) {
            left++;
        } else /*if (tempSum > k)*/ {
            right--;
        }
    }
    return count;
};

// Time complexity is O(n) + O(nlogn) -->  O(nlogn) 
// Spacy complexity is O(1) because we do not use any extra space

console.log("Output:", maxOperations(nums1, k1));
console.log("Expected:", output1);
console.log("===================");
console.log("Output:", maxOperations(nums2, k2));
console.log("Expected:", output2);
console.log("===================");