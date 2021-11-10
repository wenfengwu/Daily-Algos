
// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have EXACTLY ONE SOLUTION,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given arr = [2, 11, 7, 15], target = 9,
// Because arr[0] + arr[2] = 2 + 7 = 9
// return [0, 2].

// example 1
// given: [2, 11, 7, 15]
// target: 9
// output: [0,2]

// example 2
// given: [3,2,4]
// target: 6
// output: [1,2]

// example 3
// given: [3,3]
// target: 6
// output: [0,1]

// Map.prototype.get(key)
// Returns the value associated to the key, or undefined if there is none.

// Map.prototype.set(key, value)
// Sets the value for the key in the Map object. Returns the Map object.

const twoSums = (arr, target) => {
    //Generate a hashmap to store values and indexes
    const tempMap = new Map();

    //Traverse the array by using for loop
    for(let i = 0; i < arr.length; i++){
        //calcalate the difference
        const diff = target - arr[i];

        //If the tempMap contains difference, return the stored Index and i
        if(tempMap.has(diff)){
            return [tempMap.get(diff), i];
        }

        //if it does not contain, store the value and index into tempMap;
        tempMap.set(arr[i], i); 
    }
};

console.log(twoSums([3,3], 6));


