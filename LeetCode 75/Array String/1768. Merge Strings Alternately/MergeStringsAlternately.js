// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1,word2) {
    //Two pointers solution
    let i = 0;
    let j = 0;
    let combinedLength = word1.length + word2.length - 1;
    let output = [];

    while (combinedLength > 0) {
        if (i !== word1.length) {
            output.push(word1[i]);
            i++;
        }
        if (j !== word2.length) {
            output.push(word2[j]);
            j++;
        }
        combinedLength--;
    }
    
    return output.join('');
};


//Math Max solution
var mergeAlternatelyMathMax = function (word1, word2) {
    let results = [];
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1[i]) results.push(word1[i])
        if (word2[i]) results.push(word2[i])
    }

    return results.join('');
}

//Variation without .join()
//Best runtime and space complexity of the 3 because we traverse both strings once and pick each characterr alternately
//Time complexity is O(n), where n is the length of the longer string
// Space complexity is O(n), where n is the length of the longer string
var mergeAlternatelyVariation = function (word1, word2) {
    let results = '';
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) results += word1[i];
        if (i < word2.length) results += word2[i];
    }

    return results;
}


word1 = "abc";
word2 = "pqr";
output = "apbqcr";

console.log("Output:", mergeAlternately(word1, word2));
console.log("Output Variation:", mergeAlternatelyVariation(word1, word2));
console.log("Expected Output:", output);

word3 = "ab", word4 = "pqrs"
output1 = "apbqrs";

console.log("Output:", mergeAlternately(word3,word4));
console.log("Output Variation:", mergeAlternatelyVariation(word3, word4));
console.log("Expected Output:", output1);

word4 = "abcd", word5 = "pq";
output2 = "apbqcd";

console.log("Output:", mergeAlternately(word4,word5));
console.log("Output Variation:", mergeAlternatelyVariation(word4, word5));
console.log("Expected Output:", output2);

