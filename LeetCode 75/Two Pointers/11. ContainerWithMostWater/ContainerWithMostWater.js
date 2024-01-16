// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

height1 = [1,8,6,2,5,4,8,3,7];
output1 = 49;

height2 = [1,1];
output2 = 1;

var maxArea = function(height) {
    // We'll have two pointers, pointing to the left wall height of the container and the right wall height
    let left = 0, right = height.length - 1;
    // We only care about the lowest height of the wall, because that is where the water will overflow
    // Area is height x width -->
    // height = Math.min(height[left], height[right])
    // width = right - left
    let max = 0;
    while (left < right) {
        // maxTemp is the maximum area
        // We need width and height to calculate the area
        let width = (right - left);
        let maxArea = Math.min(height[left],height[right]) * width;

        // This takes the higher number of the two and sets it to our return value
        max = Math.max(max, maxArea);

        // Depending on the height of the container, we will increment the left, or decrement the right
        // If the left wall is less than the right wall, then we want to increment left so we can calculate the next area
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    };
    return max;
};

console.log("Output:", maxArea(height1));
console.log("Expected:", output1);
console.log("==============");

console.log("Output:", maxArea(height2));
console.log("Expected:", output2);
console.log("==============");