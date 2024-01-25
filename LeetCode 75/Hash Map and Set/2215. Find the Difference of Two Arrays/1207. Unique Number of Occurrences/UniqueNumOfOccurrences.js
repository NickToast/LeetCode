// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

let arr1 = [1,2,2,1,1,3], ans1 = true;

let arr2 = [1,2], ans2 = false;

let arr3 = [-3,0,1,-3,1,1,1,-3,10,0], ans3 = true;

var uniqueOccurrences = function(arr) {
    // Create set and map
    let set = new Set();
    let map = new Map();

    // Loop through array to create map with the frequencies
    for(let num of arr) {
        // 
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    // Create set by iterating through each value in the map
    for (let freq of map.values()) {
        if(set.has(freq)) return false;
        set.add(freq);
    }
    return true;
}

console.log("Output:", uniqueOccurrences(arr1));
console.log("Expected:", ans1);
console.log("------------");

console.log("Output:", uniqueOccurrences(arr2));
console.log("Expected:", ans2);
console.log("------------");

console.log("Output:", uniqueOccurrences(arr3));
console.log("Expected:", ans3);
console.log("------------");