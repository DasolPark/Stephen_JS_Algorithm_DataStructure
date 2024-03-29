// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// function palindrome(str) {
//   let reversed = str
//     .split('')
//     .reverse()
//     .join();
//   return str === reversed;
// }

// DS Ver.
// function palindrome(str) {
//   let rev = '';
//
//   for (let char of str) {
//     rev = char + rev;
//   }
//
//   return str === rev;
// }

// DS Ver.
// function palindrome(str) {
//   return str === str.split('').reduce((rev, char) => (rev = char + rev), '');
// }
