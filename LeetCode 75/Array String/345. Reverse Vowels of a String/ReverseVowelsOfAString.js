// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

//Example 1
s1 = "hello";
output1 = "holle";

//Example 2
s2 = "leetcode";
output2 = "leotcede";

// Loop through string forward and backward
// Stop at string length divided by 2(center)
// If string letter is a vowel, then reverse it with the first vowel of the backward iteration vowel


// Hash Map Solution
var reverseVowelsHashMap = function(s) {
    const vowels = {}; // hash table that gives O(1) look up time
    for (const char of "aeiouAEIOU") {
        vowels[char] = true;
    }

    // Strings are immutable, cannot change, so we will split them to make into an array, then join them back together
    const characters = s.split("");

    // Start on opposite ends
    let left = 0, right = s.length-1;
    while (left < right) {
        while (left < right && !(s[left] in vowels)){
            left += 1;
        }
        while (left < right && !(s[right] in vowels)){
            right -= 1;
        }
        swap(characters, left, right);
        left+=1;
        right-=1;
    }
    return characters.join('');
};

var swap = function(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Time complexity is O(n) where n is the number of characters in string
// Space complexity is O(n) because we created array copy of input string

console.log("Output Hash Map:", reverseVowelsHashMap(s1));
console.log("Expected:", output1);
console.log("================");

console.log("Output Hash Map:", reverseVowelsHashMap(s2));
console.log("Expected:", output2);
console.log("================");


var reverseVowels = function(s) {
    let l = 0, r = s.length -1;
    let result = s.split('');
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    while (l < r) {
        if (!vowels.has(result[l])) l++;
        else if (!vowels.has(result[r])) r--;
        else {
            [result[l], result[r]] = [result[r], result[l]];
            l++;
            r--;
        }
    }

    return result.join('');
}

console.log("Output:", reverseVowels(s1));
console.log("Expected:", output1);
console.log("================");

console.log("Output:", reverseVowels(s2));
console.log("Expected:", output2);
console.log("================");