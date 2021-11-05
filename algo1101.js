var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

var arrC = [0, 0, 0, 0];
var arrD = [1, 0, 0, 0, 0, 10,];

// function mergeDedupe(arr1, arr2) {
//     const newArr = [];
//     let arr1Idx = 0;
//     let arr2Idx = 0;
//     while (arr2Idx < arr2.length && arr1Idx < arr1.length){
//         if (arr1[arr1Idx] < arr2[arr2Idx]) {
//             newArr.push(arr1[arr1Idx])
//             arr1Idx++;
//         }
//         else {
//             newArr.push(arr2[arr2Idx]);
//             arr2Idx++;
//         }
//     }
//     for (let i = arr1Idx; i < arr1.length; i++){
//         newArr.push(arr1[i]);
//     }
//     for (let i = arr2Idx; i < arr2.length; i++){
//         newArr.push(arr2[i]);
//     }
//     // for (let i = 0; i < newArr.length; i++) {
//     //     if (newArr[i] == newArr[i+1]){
//     //         newArr.splice(i, 1);
//     //         i--;
//     //     }
//     // }
//     return newArr;
// }

// console.log(mergeDedupe(arr1, arr2));
// console.log(mergeDedupe(arrA, arrB));

function mergeDedupe(arr1, arr2) {
    let newArr = [];
    let pointerA = 0;
    let pointerB = 0;
    while(pointerA < arr1.length && pointerB < arr2.length){
        if(arr1[pointerA] < arr2[pointerB]){
            if(newArr.includes(arr1[pointerA])){
                pointerA++;
            }
            else{
                newArr.push(arr1[pointerA]);
                pointerA++;
            }

        }
        if(arr1[pointerA] > arr2[pointerB]){
            if(newArr.includes(arr2[pointerB])){
                pointerB++;
            }
            else{
                newArr.push(arr2[pointerB]);
                pointerB++;
            }
        }
        if(arr1[pointerA] === arr2[pointerB]){
            if(newArr.includes(arr2[pointerB])){
                pointerB++;
                pointerA++;
            }
            else{
                newArr.push(arr2[pointerB]);
                pointerB++;
                pointerA++;
            }
        }
    }
    while(pointerA < arr1.length){
        if(newArr.includes(arr1[pointerA])){
            pointerA++;
        }
        else{
            newArr.push(arr1[pointerA]);
            pointerA++;
        }
    }
    while(pointerB < arr2.length){
        if(newArr.includes(arr2[pointerB])){
            pointerB++;
        }
        else{
            newArr.push(arr2[pointerB]);
            pointerB++;
        }
    }

    return newArr
}

console.log(mergeDedupe(arrC,arrD));
// console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]
// console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]