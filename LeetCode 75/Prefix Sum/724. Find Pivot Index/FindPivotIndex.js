// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

let nums1 = [1,7,3,6,5,6], output1 = 3;

let nums2 = [1,2,3], output2 = -1;

let nums3 = [2,1,-1], output3 = 0;


var pivotIndex = function (nums) {

    // let totalSum = 0, leftSum = 0;
    // nums.forEach((e) => {
    //     totalSum += e;
    // })
    // for (let i = 0; i < nums.length; i++) {
    //     if (totalSum - leftSum - nums[i] == leftSum) {
    //         return i;
    //     }
    //     leftSum += nums[i];
    // }
    // return -1;

    // Set up our variables
    let pivot = 0, leftSum = 0, rightSum = 0;

    // This loop is to get the rightSum total, we start at pivot + 1 because we do not include the pivot into our calculations for the rightSum
    for (let i = pivot + 1; i < nums.length; i++) {
        // This loop gives us the rightSum total
        rightSum += nums[i];
    }
    
    // Loop to get the sum of the left side of the pivot, while subtracting from the rightSum
    for (let pivot = 0; pivot < nums.length; pivot++) {
        // Set conditional, if leftSum equals rightSum, return the pivot point
        if (leftSum == rightSum) return pivot;
        // If not, we keep adding to the leftSum until left and right is equal
        leftSum += nums[pivot]; // Add values to the leftSum 
        rightSum -= nums[pivot+1]; // Subtracting from the rightSum
    }
    // If left and right sums never equal each other, it will exit for loop and return -1
    return -1;
};

console.log("Output:", pivotIndex(nums1));
console.log("Expected:", output1);
console.log("-------------");
console.log("Output:", pivotIndex(nums2));
console.log("Expected:", output2);
console.log("-------------");
console.log("Output:", pivotIndex(nums3));
console.log("Expected:", output3);
console.log("-------------");
