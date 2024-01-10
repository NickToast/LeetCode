// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

nums1 = [0,1,0,3,12];
output1 = [1,3,12,0,0];

nums2 = [0];
output2 = [0];

var moveZeroes = function(nums) {
    // Two Pointers
    let left = 0;
    let right = left + 1;

    // Loop through the length of the array
    while (right < nums.length) {
        // If the first number is not a 0, then we will increment both left and right by 1, to go through the array
        // If it is 0, we execute the else statement
        if (nums[left] !== 0) {
            left++;
            right++;
        } else {
            // If the right number is not 0, then we flip the values, and increment left and right pointers
            if (nums[right] !== 0 ) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
            right++;
        }
    }
    return nums;
};

console.log("Output:", moveZeroes(nums1));
console.log("Expected:", output1);
console.log("==============");
console.log("Output:", moveZeroes(nums2));
console.log("Expected:", output2);
console.log("==============");