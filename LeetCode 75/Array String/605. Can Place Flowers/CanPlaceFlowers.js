// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

/* Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.*/

//Example 1
flowerbed1 = [1,0,0,0,1], n1 = 1;
output1 = true;

//Example 2
flowerbed2 = [1,0,0,0,1], n2 = 2;
output2 = false;

// Loop through flowerbed
// Check if i = 0, if so, check left and right, if != 0, continue to next flower spot
// Check if left and right is == 0, if so then lower n by 1 and continue
// return true or false (if n <= 0 then the flowers fit)

var canPlaceFlowersVariation = function (flowerbed, n) {
    let i = 0;
    
    while (i < flowerbed.length && n != 0) {
        if (flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) {
            n--;
            i++;
        }
        i++;
    }
    return n === 0;
}

// Loop through flowerbed
// 
// Return true or false

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 && (i == 0 || flowerbed[i-1] == 0 )  && (i == flowerbed.length-1 || flowerbed[i+1] == 0)){
            n--;
            i++;
        }
    }
    return n<= 0;
};



console.log("Output:", canPlaceFlowers(flowerbed1, n1));
console.log("Expected Output:", output1);
console.log("==================");

console.log("Output:", canPlaceFlowers(flowerbed2, n2));
console.log("Expected Output:", output2);
console.log("==================");