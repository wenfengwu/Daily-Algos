/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
// //  * @param {string} strA
// //  * @param {string} strB
// //  * @returns {boolean} If the strings are equal or not.
//  */
function caseInsensitiveStringCompare(strA, strB) {
  return strA.toUpperCase() === strB.toUpperCase();
}
console.log(caseInsensitiveStringCompare(strA1, strB1));

console.log(caseInsensitiveStringCompare(strA2, strB2));

console.log(caseInsensitiveStringCompare(strA3, strB3));

/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

// const str1 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";

// const str2 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";

// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string to be turned into an acronym.
//  * @returns {string} The given str converted into an acronym.
//  */

// function acronymize(str) {
//   var arrStr = str.split(" ");
//   var newStr = "";
//   for (var i = 0; i < arrStr.length; i++) {
//     newStr += arrStr[i].charAt(0).toUpperCase();
//   }
//   return newStr;
// }

// console.log(acronymize(str1));
// console.log(acronymize(str2));
