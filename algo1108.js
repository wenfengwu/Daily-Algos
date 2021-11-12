// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};


const findObjectsFilter = (searchObj, itemsArr) => {
    let temp = [...itemsArr];
    for(const key in searchObj){
        temp = temp.filter( item => item.hasOwnProperty(key) && item[key] === searchObj[key]);
        // console.log(key)
        // console.log(temp);
    }
    return temp;
}

console.log(findObjectsFilter(searchFor1, items));

// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// const searchFor2 = {
//   lastName: "Smith",
// };
// const output2 = [
//     { firstName: "John", lastName: "Smith", age: 25 },
//     { firstName: "Bob", lastName: "Smith", age: 27 },
//   ];

// const findObjectsFilter = (searchObj, itemsArr) => {
//     let temp = Object.keys(searchObj);
  
//     let x = itemsArr.filter( item => {
//       for(key of temp){
//          if(item[key] === searchObj[key]){
//              return
//          }
//       }
//     })
  
//     return x;
//   }