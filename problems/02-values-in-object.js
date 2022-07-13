/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  let myValues = Object.values(obj);
  console.log(myValues);
  return myValues
}

function valuesInObject2(obj) {
  let myValues = [] // create a blank array that stores all values
  for(keys in obj){
    myValues.push(obj[keys]); // push the object at key 'keys' for every key in 'obj'
  }

  console.log(myValues); // print myValues to console
  return myValues;
}

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]

console.log('______________________________')

let myAnimals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let myFoods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject2(myAnimals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject2(myFoods); // => ["tart", "sour", "sweet"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
