// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1
nums1 = [1,2,3,4];
output1 = [24,12,8,6];

// Example 2
nums2 = [-1,1,0,-3,3];
output2 = [0,0,9,0,0];

var productExceptSelf = function(nums) {
    // Pre table x post table = product of all numbers except self

    const answer = []; // Instantiating pre table, which will also be the answer

    // Iterate through the inputs(nums)
    for (let i = 0; i < nums.length; i++) {
        // Build the pre table first
        // Theres nothing before it, set pre as the first value
        if (nums[i-1] === undefined) {
            answer[i] = nums[i];
        } else {
            answer[i] = answer[i-1] * nums[i]; // Builds the pre product table
        }
        // After this if statement, the pre product table should be [1, 2, 6, 24]
        // console.log(answer);
    }
    let post = 1;
    for (let i = nums.length-1; i >= 0; i--) {
        if(nums[i+1] === undefined) {
            answer[i] = answer[i-1];
            post = nums[i]; // Updating post product table
        } else {
            answer[i] = (answer[i-1] === undefined ? 1 : answer[i-1]) * post;
            post = post * nums[i];
        }
    }
    return answer;
}

console.log("Output:", productExceptSelf(nums1));
console.log("Expected:", output1);
console.log("Output:", productExceptSelf(nums2));
console.log("Expected:", output2);

// Explanation for another solution
var productExceptSelfVariation = function(nums) {
    // Set up an empty array as our result
    const result = []
    
    // Initialize a prefix tracker at 1
    let prefix = 1
    
    // Loop through the input array - for each position,
    // the result array should equal the prefix tracker.
    
    // Then, update the prefix tracker to be the product of itself,
    // multiplied by the input value at the position.
    for (let i=0; i<nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }
    
    // Initialize a suffix tracker at 1
    let suffix = 1
    
    // Loop backwards through the array.
    // For each iteration, set the result array to be 
    // the product of itself multiplied by the suffix tracker.
    
    // Then, update the suffix tracker to be the product of itself,
    // multiplied by the input value at that position.
    for (let i=nums.length - 1; i>=0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }
    return result
};