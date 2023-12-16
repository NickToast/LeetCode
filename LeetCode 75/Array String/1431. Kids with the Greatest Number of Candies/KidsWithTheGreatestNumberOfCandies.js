// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

//Example 1
candies = [2,3,5,1,3], extraCandies = 3;
output = [true, true, true, false, true];

//Example 2
candies1 = [4,2,1,1,2], extraCandies1 = 1;
output1 = [true, false, false, false, false];

//Example 3
candies2 = [12,1,12], extraCandies2 = 10;
output2 = [true, false, true];

/*Explanation
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids. */

//Create a loop and an empty result output []
//Store a max value of this array so we can compare it with other values
//If its true candies[i] > max is true then result.push[] : false

var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let max = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}

console.log("Output:", kidsWithCandies(candies, extraCandies));
console.log("Expected Output:", output);
console.log("---------------------");

console.log("Output:", kidsWithCandies(candies1, extraCandies1));
console.log("Expected Output:", output1);
console.log("---------------------");

console.log("Output:", kidsWithCandies(candies2, extraCandies2));
console.log("Expected Output:", output2);
console.log("---------------------");
