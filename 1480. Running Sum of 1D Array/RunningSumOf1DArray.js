var runningSum = function(nums) {
    let total = 0;
    let output = [];
    for(let i = 0; i < nums.length; i ++) {
        total += nums[i];
        output.push(total);
    }
    return output;
};

nums = [1,2,3,4]
output = [1,3,6,10]

console.log("Output:", runningSum(nums));
console.log("Expected Output:", output);
console.log("-----------------------")

nums1= [1,1,1,1,1]
output1 = [1,2,3,4,5]

console.log("Output:", runningSum(nums1));
console.log("Expected Output:", output1);
console.log("-----------------------")

nums2 = [3,1,2,10,1]
output2 = [3,4,6,16,17]

console.log("Output:", runningSum(nums2));
console.log("Expected Output:", output2);
console.log("-----------------------")