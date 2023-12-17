// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

//Example 1
s1 = "the sky is blue";
output1 = "blue is skye the";

//Example 2
s2 = " hello world ";
output2 = "world hello"; // Reversed string should not contain leading or trailing spaces

//Example 3
s3 = "a good   example";
output3 = "example good a"; // Reduce multiple spaces between two words to a single space in the reversed string

var reverseWords = function(s) {
    let arr = s.split(' ');
    let result = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == '') continue;
        if (result.length > 0) result += ' ';
        result += arr[i];
    }
    return result;
}

console.log("Output:", reverseWords(s1));
console.log("Expected:", output1);
console.log("Output:", reverseWords(s2));
console.log("Expected:", output2);
console.log("Output:", reverseWords(s3));
console.log("Expected:", output3);