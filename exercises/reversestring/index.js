// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//soln 1
// function reverse(str) {
//   //.split with empty ellement turn/split a string into an array of individual characters. .join, joins it back to a string
//     return str.split('').reverse().join('');
// }


//soln 2
// function reverse(str){
//     let reversed = ''; 
//     // for( let i=0; i < str.length; i++){  for loop, reg js
//     //     reversed = str[i] + reversed;
//     // }

//     for(let character of str){    //for loop, es6
//         reversed = character + reversed;
//     }
//     return reversed;
// }

//soln 3
function reverse(str){
    debugger;
    str.split('').reduce((reversed, character) =>    //split turns string to array, reduce is used to take different value of array and condense to single string value, 1st arg, arrow function, 2nd arg is starting initial value for function
     character + reversed  , '');    // take character, add to reversed string and return it
}            

reverse('howde');
module.exports = reverse;
