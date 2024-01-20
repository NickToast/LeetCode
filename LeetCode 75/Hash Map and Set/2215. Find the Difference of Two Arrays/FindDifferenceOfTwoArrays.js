// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

let nums1 = [1,2,3], nums2 = [2,4,6], output1 = [[1,3], [4,6]];

let nums3 = [1,2,3,3], nums4 = [1,1,2,2], output2 = [[3],[]];

var findDifference = function(nums1, nums2) {
    // Create two new sets with our nums arrays
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    // Loop through nums1 array
    for (let num of nums1) {
        // Check if set2 has value of num, if so, we will delete that num from both sets
        if (set2.has(num)) {
            set1.delete(num);
            set2.delete(num);
        }
    }
    // We create an array out of our set using the spread operator
    // Destructuring all the elements in the set, and then creating an array out of all the elements
    return [[...set1], [...set2]];
};

// Time complexity: O(n+m) ?
// Space complexity: O(n+m) ?

console.log("Output:", findDifference(nums1, nums2));
console.log("Expected:", output1);
console.log("------------");
console.log("Output:", findDifference(nums3, nums4));
console.log("Expected:", output2);
console.log("------------");