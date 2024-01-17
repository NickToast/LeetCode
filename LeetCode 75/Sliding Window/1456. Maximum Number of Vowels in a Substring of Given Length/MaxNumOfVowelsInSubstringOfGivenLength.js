// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

let s1 = "abciiidef", k1 = 3;
let output1 = 3;

let s2 = "aeiou", k2 = 2;
let output2 = 2; 

let s3 = "leetcode", k3 = 3;
let output3 = 2; 

var maxVowels = function(s, k) {
    // New vowel set
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    // Max variable for max num of vowel letters in any substring
    let maxVowels = 0;
    let vowels = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < s.length; windowEnd++){
        // Check if length is greater than k, then increment windowStart so we only work in a substring of the length k
        if (windowEnd - windowStart + 1 > k) {
            // Check if s[windowStart], the beginning of the window value, contains a vowel, then decrease the vowel counter for the substring
            if (vowelSet.has(s[windowStart])) {
                vowels--;
            }
            windowStart++;
        }
        // If above conditional does not go through, then that means we now have a substring of length k
        // Now we want to increase our vowels counter for each vowel in the substring
        if (vowelSet.has(s[windowEnd])) { // If s[windowEnd] is in the vowelSet that we created then do this
            vowels++; // Increase our vowels counter
            maxVowels = Math.max(maxVowels, vowels);
        }
    }
    return maxVowels;
};

// Time complexity is O(n) where n is the length of the string
// Space complexity is O(1) constant

console.log("Output:", maxVowels(s1,k1));
console.log("Expected:", output1);
console.log("=========");

console.log("Output:", maxVowels(s2,k2));
console.log("Expected:", output2);
console.log("=========");

console.log("Output:", maxVowels(s3,k3));
console.log("Expected:", output3);
console.log("=========");