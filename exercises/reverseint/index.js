// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = n.toString().split('').reverse().join('');

    return parseInt(str)* Math.sign(n);

}

module.exports = reverseInt;
//tostring changes number to string , math.sign, return 1x if +ve and -1 if -ve*(
    //parseint changes to int

