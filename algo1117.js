/* 
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar


const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

// function canBecomePalindrome(str) {
//     if(str.length === 0){
//         return false;
//     }
//     if(str.length === 1){
//         return true;
//     }
//     let tempObj = {};
//     for(let i = 0; i< str.length; i++){
//         if(tempObj.hasOwnProperty(str[i])){
//             tempObj[str[i]] = tempObj[str[i]] + 1;
//         }
//         else{
//             tempObj[str[i]] = 1;
//         }
//     }
//     let countOdd = 0;
//     let countEven = 0;
//     for(const key in tempObj){
//         tempObj[key] % 2 === 0? countEven++ : countOdd++;
//     }
//     console.log(countOdd, countEven);
//     if(str.length % 2 === 0){
        
//     }
// }

// canBecomePalindrome(str5);

function canBecomePalindrome(str) {
    if(str.length === 0){
      return false;
    }
    if(str.length === 1){
      return true;
    }
    let obj = {}
    //Even = True
    //Odd = False
    const oddOrEven = str.length%2 === 0
    let countOdd = 0;
    for (let i = 0; i < str.length; i++) {
      if(obj.hasOwnProperty(str[i])){
        obj[str[i]] += 1;
      }
      else {
        obj[str[i]] = 1;
      }
    }
    for (const letter in obj) {
      if (obj[letter]%2 === 1) {
        countOdd++;
        if (countOdd === 2) {
          return false;
        }
      }
    }
    if (oddOrEven && countOdd == 1) {
      return false;
    }
    else {
      return true;
    }
  }
  
  console.log(canBecomePalindrome(str1));
  console.log(canBecomePalindrome(str2));
  console.log(canBecomePalindrome(str3));
  console.log(canBecomePalindrome(str4));
  console.log(canBecomePalindrome(str5));
  console.log(canBecomePalindrome(str6));