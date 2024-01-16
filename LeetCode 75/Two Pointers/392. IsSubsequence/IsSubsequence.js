/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

s1 = "abc";
t1 = "ahbgdc";
output1 = true;

s2 = "axc";
t2 = "ahbgdc";
output2 = false;

var isSubsequence = function(s,t) {
    // Two Pointers
    // Point to first element in first string, then first element to second string
    let p1 = 0, p2 = 0;
    
    // While loop, as long as pointer1 is less than s string, and pointer2 is less than the t string, the loop will continue
    while (p1 < s.length && p2 < t.length) {
        // If element of s string is equal to element of t string, increment both
        if (s[p1] === t[p2]) {
            p1++;
            p2++;
        } else {
            p2++;
        }
    }
    return p1 === s.length;
};

console.log("Output:", isSubsequence(s1,t1));
console.log("Expected:", output1);
console.log("================")
console.log("Output:", isSubsequence(s2,t2));
console.log("Expected:", output2);
console.log("================")