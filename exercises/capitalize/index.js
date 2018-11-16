// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = [];

  for (splitword of str.split(" ")) {
    words.push(splitword[0].toUpperCase() + splitword.slice(1)); //capitalize first letter then join together with rest of word
  }

  return words.join(" "); //join sentence back together
}

module.exports = capitalize;
