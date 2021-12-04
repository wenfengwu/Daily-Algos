// /*
//   Given an arr and a separator string, output a string of every item in the array separated by the separator.

//   No trailing separator at the end
//   Default the separator to a comma with a space after it if no separator is provided
// */

// const arr1 = [1, 2, 3];
// const separator1 = ", ";
// const expected1 = "1, 2, 3";

// const arr2 = [1, 2, 3];
// const separator2 = "-";
// const expected2 = "1-2-3";

// const arr3 = [1, 2, 3];
// const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

// const arr4 = [1];
// const separator4 = ", ";
// const expected4 = "1";

// const arr5 = [];
// const separator5 = ", ";
// const expected5 = "";

// /**
//  * Converts the given array into a string of items separated by the given separator.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<string|number|boolean>} arr The items to be joined as a string.
//  * @param {string} separator To separate each item of the given arr.
//  * @returns {string} The given array items as a string separated by the given separator.
//  */
// function join(arr, separator) {
//   var newStr = "";
//   if (arr.length == 1) {
//     return arr[0];
//   }
//   for (var i = 0; i < arr.length; i++) {
//     newStr += arr[i];
//     if (i != arr.length - 1) {
//       newStr += separator;
//     }
//   }
//   return newStr;
// }

// console.log(join(arr1, separator1));
// console.log(join(arr2, separator2));
// console.log(join(arr3, separator3));
// console.log(join(arr4, separator4));
// console.log(join(arr5, separator5));

/*
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 2, 3, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [1, 3, 4, 5, 6, 7, 10, 25, 26, 27, 30];
const expected2 = "1, 3-7, 10, 25-27, 30";
/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
  var pagenums = "";
  var startIdx = 0;
  for (var i = 0; i < nums.length; i++) {
    var currentNum = nums[i];
    var nextNum = nums[i + 1];
    var stopIdx = i;

    //if the numbers are not in sequence
    if (currentNum + 1 != nextNum) {
      //if it is  just a single page
      if (startIdx == stopIdx) {
        //add to our output
        pagenums += currentNum;

        //if our pages were in sequence
      } else {
        //add the formated string to our output with our sequential numbers
        pagenums += `${nums[startIdx]} - ${nums[stopIdx]}`;
      }

      //fence-post problem: onlt add the comma to our string if and only if we are not at our last element of the list
      if (i != nums.length - 1) {
        pagenums += ", ";
      }

      //adding one to our strat index to store our initial sequence index
      startIdx = i + 1;
    }
  }
  return pagenums;
}

console.log(bookIndex(nums1));
console.log(bookIndex(nums2));
