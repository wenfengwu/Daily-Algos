// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const students = [{
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
},
{
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
},
{
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
}
];

// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null

// const students = {};

function findByIdAndUpdate(id, updatedVals, collection) {   
    //when updatedVals is empty, return null 
    if(Object.keys(updatedVals).length === 0){
        return null;
    }
    //loop over the arr
    for(let i = 0; i < collection.length; i++){
        //found id matches up
        if(collection[i].id === id){  
            //loop over the key-value pair and update the value
            for(const key in updatedVals){
                if(collection[i].hasOwnProperty(key)){
                    collection[i][key] = updatedVals[key]
                }
            }
            //return the updated element
            return collection[i];
        }
    }
    //if id not found, return null;
    return null;
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students))
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students))
console.log(findByIdAndUpdate(5, {}, students))



// JSON.stringify(students) === '{}' ? console.log("true") : console.log("false");
// Object.keys(students).length === 0 ? console.log("true") : console.log("false");