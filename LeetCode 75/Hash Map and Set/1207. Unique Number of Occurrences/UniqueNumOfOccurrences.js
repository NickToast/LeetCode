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
        // Check if map has num yet, if it does, add one to the value
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else { // We will add num to the map and set it to 1
            map.set(num, 1);
        }
        console.log(map);
    }

    // Create set by iterating through each value in the map
    for (let freq of map.values()) {
        // If set has the same the "freq" of the map value, we will return false bc the number of occurrences are no longer unique
        if(set.has(freq)) return false;
        // If set does not have the freq in it, we will add it to the set
        set.add(freq);
        // Sets can only store unique elements, it cannot store multiple of the same value/element (does not allow duplicates)
    }
    // If we loop through the map values, adding them to our set without return false, return true because the number of occurrences are all unique values
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