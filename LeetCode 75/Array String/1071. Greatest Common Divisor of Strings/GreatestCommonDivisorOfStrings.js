// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

str1 = "ABCABC", str2 = "ABC";
output1 = "ABC";

str3 = "ABABAB", str4 = "AB";
output2 = "AB";

str5 = "LEET", str6 = "CODE";
output3 = "";

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';

    let m = str1.length;
    let n = str2.length;

    //Recursion to find gcd (better runtime)
    let gcd = function(x,y) {
        if (!y) return x;
        return gcd(y, x % y);
    }

    let div = gcd (m, n);

    return str1.slice(0, div);
};

var gcdOfStringsVariation = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';

    let minLength = Math.min(str1.length, str2.length);

    for (let i = minLength; i > 0; i--) {
        //Checking if str1 and str2 lengths are divisible with length
        //Length i represent the length of substring
        if ((str1.length % i === 0) && (str2.length % i === 0)) {
            //return str1 substring up to that length
            return str1.substring(0,i);
        }
    }
}

console.log("Output:", gcdOfStrings(str1, str2));
console.log("Output Variation:", gcdOfStringsVariation(str1, str2));
console.log("Expected:", output1)

console.log("Output:", gcdOfStrings(str3, str4));
console.log("Output Variation:", gcdOfStringsVariation(str3, str4));
console.log("Expected:", output2)

console.log("Output:", gcdOfStrings(str5, str6));
console.log("Output Variation:", gcdOfStringsVariation(str5, str6));
console.log("Expected:", output3)
