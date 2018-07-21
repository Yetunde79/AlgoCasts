// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//soln 1
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return reversed === str;
   
// }

//soln 2: Not most efficient. compare first element to last el, 2nd to 2nd to last, 3rd to 3rd to last, etc
function palindrome(str) {
    return str.split.every((char, i)=>{     //you have to return if it has every function. the functions happens to every element, i is index
        return char === str[str.length-i-1]; //compare the character with it respective el on other side, it's -1 bcse array starts 4rm 0
    })
}

module.exports = palindrome;
