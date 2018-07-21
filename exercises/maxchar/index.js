// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let max= 0;
    let maxChar= ' ';

    for(let char of str){
        if(!chars[char]){   //if chars[char] = null make it 1;
            chars[char] = 1;  //e.g chars[a] = 1;
        }
        else{
            chars[char]++;   //if it reoccurs chars[a] = 2;
        }
    }
    for(let char in chars){  //to iterate through objects we use in
        if(chars[char] > max){   //if the num is greater than max
            max = chars[char];    //make that num equal to max
            maxChar = char;         //maxChar is equal to the character with the high number
        }
    }
    return maxChar;     //return the character
}

module.exports = maxChar;
