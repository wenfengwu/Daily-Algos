/* 
  recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the lowest common one
  then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60
  75
  75 is the first common
*/

// const num1A = 1;
// const num1B = 1;
// const expected1 = 1;

// const num2A = 5;
// const num2B = 10;
// const expected2 = 10;

// const num3A = 10;
// const num3B = 5;
// const expected3 = 10;

// const num4A = 6;
// const num4B = 8;
// const expected4 = 24;

// const num5A = 15;
// const num5B = 25;
// const expected5 = 75;

// function lowestCommonMult(a, b) {
//     if(a == b){
//         return a;
//     }
//     if(a % b == 0){
//         return a;
//     }
//     if(b % a == 0){
//         return b;
//     }
//     var mulMax = 1
//     var lower = Math.min(a,b);
//     var runner = 1
//     while(runner <= lower){
//         if(a % runner == 0 && b % runner == 0){
//             mulMax = runner;
//             console.log(mulMax);
//         }
//         runner++;
//     }
//     return a * b / mulMax;
// }



// console.log(lowestCommonMult(15,25))
// console.log(24 % 12);
// console.log(36 % 12);

/* 
  Given 
    - a 2d array representing a social space as a grid
      Each grid space either has a string representing a person's name,
      or null if there is no person there
    - a point object {x: int, y: int} indicating where "patient zero" is in the grid
  return an array of all the names of the people who that corona virus will spread to due to not social distancing
  
  There will be exactly one grid space with the value "patient zero" that
  represents someone infected.
  Standing next to someone means there is someone in the grid space immediately
  above, below, left, or right. Infection cannot directly spread diagonally.
  Someone is social distancing if the grid space above, below, left, and right are null or
  there is no space next to them.
  For simplicity sake, let's assume if a person is standing
  next to someone who is or becomes infected, they will also become infected.
  Find everyone who corona virus will spread to starting from "patient zero" as the virus spreads outward.
*/

const socialSpaceGrid = [
    ["Jon2", "Jane2", null, null],
    [null, "Jon1", "Jane1", null],
    ["Jane4", "patient zero", null, "Jon3"],
    ["Jon4", null, "Jane3", null],
  ];
  const patientZeroPoint = { x: 1, y: 2 };
  const expected = ["Jane4", "Jon4", "Jon1", "Jane1", "Jane2", "Jon2"];
  // order of output list does not matter
  
  function coronaVirusFloodFill(grid, point) {
    var result = [];
    helper(grid, point['y'], point['x'], result)
    return result.slice(1);
  }

  function helper(grid, x, y, result){
    if(0 > y || y >= grid.length){
      return;
    }
    if(0 > x || x >= grid[0].length){
      return;
    }
    var zp = grid[x][y];
    if(zp != null){
      result.push(zp);
      grid[x][y] = null;
      helper(grid, x, y-1,result)
      helper(grid, x, y+1,result)
      helper(grid, x+1, y,result)
      helper(grid, x-1, y,result)
    }
  }
  console.log(coronaVirusFloodFill(socialSpaceGrid,patientZeroPoint));


  /*****************************************************************************/

  /* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

// const str1 = "1?0?";
// const expected1 = ["1000", "1001", "1100", "1101"];
// // output list order does not matter

// function binaryStringExpansion(str) {}
/*****************************************************************************/