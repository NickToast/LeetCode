var twoSum = function(nums, target) {
    for(var i=0; i<nums.length;i++){
        for(var j=i+1; j<nums.length;j++){
            if ((nums[i]+nums[j]) === target){
                return [i, j];
            }
        }
    }
};

nums = [2,7,11,15];
target = 9;
output = [0,1];

console.log("Output:", twoSum(nums,target));
console.log("Expected Output:", output);
console.log("------------------")

nums1 = [3,2,4];
target1 = 6;
output1 = [1,2];

console.log("Output:", twoSum(nums1,target1));
console.log("Expected Output:", output1);
console.log("------------------")

nums2 = [3,3];
target2 = 6;
output2 = [0,1];

console.log("Output:", twoSum(nums2,target2));
console.log("Expected Output:", output2);
console.log("------------------")
