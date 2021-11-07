//1. create a newArr, use two for loops to check, but time complexity will be n^2
// for(const n of arrA){
//     if(arrB.includes(n) === false && newArr.includes(n)){
//         newArr.push(n)
//     }
// }
// for(const n of arrB){
//     if(arrA.includes(n) === false && newArr.includes(n)){
//         newArr.push(n)
//     }
// }
// return newArr





//2. set two array first, dedulplicate two arrays, then concat two sets into one array
// then use dictionary to mark the accurance of elements, then store the element which only shows once into a newArr
// then output the newArr  time complexity will be n 
function symmetricDifferences(numsA, numsB) {
    let newArr = [];
    let tempArr = [];
    let tempDic = {};
    numsA = new Set(numsA);
    numsB = new Set(numsB);
    console.log("numsA: " + numsA);
    console.log("numsB: " + numsB);
    tempArr = [...numsA,...numsB];
    console.log("tempArr: " + tempArr)
    tempArr.forEach(element => tempDic[element] ? tempDic[element]++ : tempDic[element] = 1);
    console.log("tempDic: " + tempDic);
    for(key in tempDic){
        if(tempDic[key] === 1){
            newArr.push(parseInt(key));
        }
    }
    return newArr
}

console.log(symmetricDifferences([1,2,2], [2,5,6]))










//Hashtable or Hashset
// function symmetricDifferences(numsA, numsB) {
//     let newArr = {}
//     let result = []
//     numsA = new Set(numsA)
//     numsB = new Set(numsB)
//     numsA.forEach(num => newArr[num] ? newArr[num] += 1 : newArr[num] = 1)
//     numsB.forEach(num => newArr[num] ? newArr[num] -= 1 : newArr[num] = 1)

//     for (let key in newArr) {
//         if (newArr[key] != 0) {
//             result.push(key)
//         }
//     }
//     return result
// }