// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let num = 0;
//   let vowel = ["a", "e", "i", "o", "u"];

//   for (let char of str.toLowerCase()) {
//     if (vowel.includes(char)) {
//       num++;
//     }
//   }
//   return num;
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi); //returns true if it  matches
  //regex: g makes sure we dont stop at first match, i means it's case insensitive
  return matches ? matches.length : 0; //if u find vowel return lenth else return 0
}

module.exports = vowels;
