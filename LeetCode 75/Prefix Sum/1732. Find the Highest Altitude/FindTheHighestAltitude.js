// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

let gain1 = [-5,1,5,0,-7], output1 = 1;

let gain2 = [-4, -3, -2, -1, 4, 3, 2], output2 = 0;

var largestAltitude = function(gain) {
    let currentAltitude = 0;
    let maxAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        maxAltitude = Math.max(maxAltitude, currentAltitude);
    }

    /*
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        if (currentAltitude > maxAltitude) {
            maxAltitude = currentAltitude;
        }
    }
    */
    return maxAltitude;
};

console.log("Output:", largestAltitude(gain1));
console.log("Expected:", output1);
console.log("==============");

console.log("Output:", largestAltitude(gain2));
console.log("Expected:", output2);
console.log("==============");