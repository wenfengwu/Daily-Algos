/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/
    Given to a Coding Dojo alumni by Riot games in 2021.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

// 
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
    tempObj = {};
    tempArr = [];
    let i = 0;
    let key = str[0];
    
    //put each key-value pairs into the object
    for(; i < str.length;){
        tempNum = '';
        if(isNaN(str[i])){
            key = str[i];
            i++;
        }
        while(!isNaN(str[i])){
            tempNum += str[i];
            i++;
        }
        if(tempObj.hasOwnProperty(key)){
            tempObj[key] = tempObj[key] + parseInt(tempNum);
        }
        else{
            tempObj[key] = parseInt(tempNum);
        }
    }
    console.log(tempObj);

    //store each key-value pairs into the array
    for(const key in tempObj){
        newStr = '';
        newStr = `${key}${tempObj[key]}`;
        tempArr.push(newStr);
    }
    console.log(tempArr);

    //sort the array
    tempArr = tempArr.sort();

    //put each elements into a new string then return
    tempStr = '';
    for(const elem of tempArr){
        tempStr += elem;
    }
    return tempStr;
}

console.log(rehash(str1));