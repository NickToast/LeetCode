// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

let s1 = "abciiidef", k1 = 3;
let output1 = 3;

let s2 = "aeiou", k2 = 2;
let output2 = 2; 

let s3 = "leetcode", k3 = 3;
let output3 = 2; 

var maxVowels = function(s, k) {
    let count = 0;
    while (i < s.length - k){
        
    }
};

console.log("Output:", maxVowels(s1,k1));
console.log("Expected:", output1);
console.log("=========");

console.log("Output:", maxVowels(s2,k2));
console.log("Expected:", output2);
console.log("=========");

console.log("Output:", maxVowels(s3,k3));
console.log("Expected:", output3);
console.log("=========");