/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  let obj = {};                                                   // define an object to hold total scores of each player
  for(ele of people){                                             // iterate through people array
    let valueArr = Object.values(ele);                            // store both values of 'ele' object into their own array
    let player = valueArr[0];                                     // let 'player' equal the first value of valueArr
    let score  = valueArr[1];                                     // let 'score equal the second value of valueArr

    !obj[player] ? obj[player] = score : obj[player] += score;    // if there is a value at index 'player', add score to existing element. If not, add element and score
  }
  return obj; // return all totalScores
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
