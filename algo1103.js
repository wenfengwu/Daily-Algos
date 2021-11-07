/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arr1 = [1, 2, 2, 2, 7];
const arr2 = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const arrA = [1, 2, 2, 2, 7, 10, 15, 20];
const arrB = [2, 2, 6, 6, 7];
const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];

function orderedMultisetUnion(sortedA, sortedB) {
    const newArr = [];
    let indexA = 0;
    let indexB = 0;
    while(indexA < sortedA.length && indexB < sortedB.length){
        if(sortedA[indexA] === sortedB[indexB]){
            newArr.push(sortedA[indexA]);
            indexA ++;
            indexB ++;
        }
        else if(sortedA[indexA] < sortedB[indexB]){
            newArr.push(sortedA[indexA]);
            indexA++;
        }
        else{
        newArr.push(sortedB[indexB]);
        indexB++;
        }
    }
    // console.log(newArr)

    for(; indexA < sortedA.length; indexA++){
      newArr.push(sortedA[indexA]);
    }
    
    for(; indexB < sortedB.length; indexB++){
     newArr.push(sortedA[indexB]);
   }

   return newArr

  }

  console.log(orderedMultisetUnion(arrA,arrB));