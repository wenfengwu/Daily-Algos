/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

function orderedIntersection(sortedA, sortedB) {
  const newArr = [];
  let idx1 = 0;
  let idx2 = 0;
  let temp;
 while (sortedA.length > idx1 && sortedB.length > idx2) {
   if(sortedA[idx1] == sortedB[idx2]) {
     if (temp != sortedA[idx1]) {
       newArr.push(sortedA[idx1])
       temp = sortedA[idx1]
     }
     idx1++;
     idx2++;
   }
   if(sortedA[idx1] < sortedB[idx2]){
     idx1++;
   }
   if(sortedA[idx1] > sortedB[idx2]){
     idx2++;
   }
 }
 return newArr;
}
console.log(orderedIntersection(arrA1, arrB1))
console.log(orderedIntersection(arrA2, arrB2))
console.log(orderedIntersection(arrA3, arrB3))
console.log(orderedIntersection([0,0,0,0,0], []))
