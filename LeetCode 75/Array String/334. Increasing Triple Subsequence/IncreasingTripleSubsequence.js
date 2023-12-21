// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1
nums1 = [1,2,3,4,5];
output1 = true;

// Example 2
nums2 = [5,4,3,2,1];
output2 = false;

// Example 3
nums3 = [2,1,5,0,4,6];
output3 = true;

var increasingTriplet = function(nums) {
    // Initial thought process, does not work if there is a number less than j but k is greater than (i.e. [4,3,1,2,1,3])
    // for (let i = 1; i <= nums.length - 2; i++) {
    //     if (nums[i-1] < nums[i] && nums[i] < nums[i+1]) {
    //         return true;
    //     }
    // }
    // return false;


    // let first = Infinity;
    // let second = Infinity;
    // for (let third of nums) {
    //     console.log("third:", third);
    //     if (third < first) {
    //         first = third;
    //         console.log("first", first);
    //     } else if (third < second && third > first) {
    //         second = third;
    //         console.log("second", second);
    //     } else if (third > second && third > first) {
    //         return true;
    //     }
    // }
    // return false;


    // Another Solution
    let firstNum = Infinity;
    let secondNum = Infinity;

    for (let currentNum of nums) {
        if (currentNum > secondNum) {
            return true;
        }
        if (currentNum > firstNum) {
            secondNum = currentNum;
        } else {
            firstNum = currentNum;
        }
    }
    return false;
}

console.log("Output:", increasingTriplet(nums1));
console.log("Expected Output:", output1);
console.log("=================");
console.log("Output:", increasingTriplet(nums2));
console.log("Expected Output:", output2);
console.log("=================");
console.log("Output:", increasingTriplet(nums3));
console.log("Expected Output:", output3);
console.log("=================");