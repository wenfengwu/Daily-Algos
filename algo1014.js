/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

// const cents1 = 25;
// // const expected1 = { quarter: 1 };

// const cents2 = 50;
// // const expected2 = { quarter: 2 };

// const cents3 = 9;
// // const expected3 = { nickel: 1, penny: 4 };

// const cents4 = 99;
// // const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(cents) {
  var dict = {};
  var num1 = Math.floor(cents / 25);
  if (num1 > 0) {
    dict["quarter"] = num1;
  }
  cents = cents % 25;
  num1 = Math.floor(cents / 10);
  if (num1 > 0) {
    dict["dime"] = num1;
  }
  cents = cents % 10;
  num1 = Math.floor(cents / 5);
  if (num1 > 0) {
    dict["nickel"] = num1;
  }
  cents = cents % 5;
  if (cents > 0) {
    dict["penny"] = cents;
  }
  return dict;
}

// // module.exports = { fewestCoinChange };

// console.log(fewestCoinChange(98));

/*****************************************************************************/
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
// const expected1 = 2;

const nums2 = [3, 0, 1, 2];
// const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];

// const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];

// const expected4 = 6;

function missingValue(unorderedNums) {
  var min = unorderedNums[0];
  var max = unorderedNums[0];
  var sum = 0;
  for (var i = 0; i < unorderedNums.length; i++) {
    if (unorderedNums[i] < min) {
      min = unorderedNums[i];
    }
    if (unorderedNums[i] > max) {
      max = unorderedNums[i];
    }
    sum += unorderedNums[i];
  }
  if (max - min + 1 === unorderedNums.length) {
    return null;
  }
  var sum1 = ((max + min) * (unorderedNums.length + 1)) / 2;

  return sum1 - sum;
}

//   var sum1, sum2;
// }
console.log(missingValue(nums1));
console.log(missingValue(nums2));
console.log(missingValue(nums3));
console.log(missingValue(nums4));

/*****************************************************************************/
