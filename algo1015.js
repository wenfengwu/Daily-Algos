/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5, 7, 8];
// console.log(Math.max(...nums1));

const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

//Question 01
//if array elements are positive integer, using lookup table
function firstNonRepeated(nums) {
  if (nums.length === 0) {
    return null;
  }
  var max = Math.max(...nums);
  var list = new Array(max + 1).fill(0);
  for (var i = 0; i < nums.length; i++) {
    list[nums[i]]++;
  }
  for (var j = 0; j < list.length; j++) {
    if (list[j] == 1) {
      return j;
    }
  }
}

console.log(firstNonRepeated(nums1));
console.log(firstNonRepeated(nums2));
console.log(firstNonRepeated(nums3));
console.log(firstNonRepeated(nums4));
console.log(firstNonRepeated(nums5));

// function getKeyByValue(object, value) {
//   return Object.keys(object).find((key) => object[key] === value);
// }

// function firstNonRepeated(nums) {
//   var dict1 = {};
//   var dict2 = {};
//   for (var i = 0; i < nums.length; i++) {
//     var count = 1;
//     if (nums[i] in dict1) {
//       dict1[nums[i]] = count + 1;
//     } else {
//       dict1[nums[i]] = count;
//       dict2[nums[i]] = i;
//     }
//   }
//   console.log(dict1);
//   console.log(dict2);
//   console.log(getKeyByValue(dict1, 1));

//   // var list = Object.values(dict1);
//   // console.log(list);
//   // for(var i = 0; i < list.length; i++){
//   //     if(list[i] == 1){
//   //         dict[i]
//   //     }
//   // }
// }

// console.log(firstNonRepeated(nums1));

// module.exports = { firstNonRepeated };

/*****************************************************************************/
/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

// const nums1 = [1, 1, 1, 1];
// const expected1 = [1];

// const nums2 = [1, 1, 2, 2, 3, 3];
// const expected2 = [1, 2, 3];

// const nums3 = [1, 1, 2, 3, 3, 4];
// const expected3 = [1, 2, 3, 4];

// const nums4 = [1, 1];
// const expected4 = [1];

// //using two pointers
// function dedupeSorted(nums) {
//   var s = 0;
//   var c = 1;
//   while (c < nums.length) {
//     if (nums[s] == nums[c]) {
//       c++;
//     } else {
//       s = s + 1;
//       nums[s] = nums[c];
//       c++;
//     }
//   }
//   return nums.slice(0, s + 1);
// }

// console.log(dedupeSorted(nums1));
// console.log(dedupeSorted(nums2));
// console.log(dedupeSorted(nums3));
// console.log(dedupeSorted(nums4));

// module.exports = { dedupeSorted };

/*****************************************************************************/
