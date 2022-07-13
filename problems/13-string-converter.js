/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string){
  let obj = {}                                // define an object to fill with letters/letter count
  for (el of string){                         // for every element of string, execute function
    if(obj[el] === undefined){
      let count = 0;                          // set a counter variable equal to 1
      for(let l = 0; l < string.length; l++){ // increment through string using 'letter
        if(string[l] == el){                  // conditional statement to check if 'letter' equals 'el'
          count++;                            // increment count if el is repeated
        }
      }
    obj[el] = count;                          // set key = el and value = count
    }
  }
  return obj;                                 // return obj
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
