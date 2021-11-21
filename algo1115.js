/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
const arr1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9];

const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];


// function dropIt(arr, callback) { 
//     return arr.filter( (elem) => callback(elem));
// }


function dropIt(arr, callback) {
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            arr.splice(0, i);
            return arr;
        }
    }
    arr.splice(0, arr.length);
    return arr;
}


console.log(dropIt(arr1, callback1));
console.log(dropIt(arr2, callback2));
console.log(dropIt(arr3, callback3));