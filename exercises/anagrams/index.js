// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const acharMap = buildCharMap(stringA);
//   const bcharMap = buildCharMap(stringB);

//   if (Object.keys(acharMap).length !== Object.keys(bcharMap).length) {
//     //if they are not same length they are not anagrms
//     return false;
//   }

//   for (let char in acharMap) {
//     if (acharMap[char] !== bcharMap[char]) {
//       //check if a particular char has been used same num of time in both obj
//       return false;
//     }
//   }
//   return true; //if it doesnt return false then its true
// }

// function buildCharMap(str) {
//   //build helper map foe any given string
//   const charMap = {};

//   for (let char of str.replace(/[^w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1; //increment when u find thar char or 1 if its the first time found
//   }
//   return charMap;
// }

//soln 2
function anagrams(stringA, stringB) {
  return buildCharMap(stringA) === buildCharMap(stringB);
}

function buildCharMap(str) {
  return str
    .replace(/[^\w]/g, "") //removing all spaces and punctuation marks
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
module.exports = anagrams;
