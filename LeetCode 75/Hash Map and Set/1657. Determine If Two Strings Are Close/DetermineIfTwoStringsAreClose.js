// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

let word1 = "abc", word2 = "bca", word3 = "a", word4 = "aa", word5 = "cabbba", word6 = "abbccc";
let ans1 = true, ans2 = false, ans3 = true;

var closeString = function(word1, word2) {
    // 
    if (word1.length !== word2.length) return false;

    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        arr1[word1[i].charCodeAt() - 'a'.charCodeAt()]++;
        arr2[word1[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] && !arr2[i] || arr2[i] && !arr1[i]) return false;
    }

    arr1.sort((a,b) => b-a);
    arr2.sort((a,b) => b-a);

    let j = 0;
    while (j < arr1.length) {
        if (arr1[j] != arr2[j]) return false;
        if (arr1[j] <= 0 && arr2[j] <= 0) break;
        j++;
    }
    return true;
};

console.log("Output:", closeString(word1,word2));
console.log("Expected:", ans1);
console.log("-------------");
console.log("Output:", closeString(word3,word4));
console.log("Expected:", ans2);
console.log("-------------");
console.log("Output:", closeString(word5,word6));
console.log("Expected:", ans3);
console.log("-------------");