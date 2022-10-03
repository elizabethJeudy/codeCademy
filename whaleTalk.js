/*
IN THIS PRACTICE, WE TRANSLATE A PHRASE TO 'WHALE TALK' 
USING LOOPS AND ARRAYS 
*/

// step 1: create variable named input; this will translate to whale talk
let input = "turpentine and turtles";

// step 2: whales only speak in vowels
const vowels = ["a", "e", "i", "o", "u"];

// step 3: create variable to store vowels from input string
let resultArray = [];

// step 4: create loop to iterate through each letter of the input variable text
for (let i = 0; i < input.length; i++) {
	/* console.log(`i is ${i}`); 
    Output: 'i is 0' ... 'i is 21'; counts number of characters in string 
 */

	// step 7: write if statement checked input is equal to 'e' and 'u'
	if (input[i] === "e") {
		resultArray.push(input[i]);
	}
	if (input[i] === "u") {
		resultArray.push(input[i]);
	}

	// step 5: create a nested for loop and make inner loop iterrate through vowels array each time outer loop runs
	for (let j = 0; j < vowels.length; j++) {
		/* console.log (`j is ${j}`); 
    Output:  'j is 0' ... 'j is 4'; counts the number of vowels in phrase 
    */

		// step 6: add letters to results array
		if (input[i] === vowels[j]) {
			resultArray.push(input[i]);
		}
	}
}

// step 8: log results array
/* console.log(resultArray);
Output:
[
  'u', 'u', 'e', 'e',
  'i', 'e', 'e', 'a',
  'u', 'u', 'e', 'e'
]
   */

// step 9: capitalize array elements and put together as one string
let resultString = resultArray.join("").toUpperCase();

// step 10: run program
console.log(resultString);
// Output: 'UUEEIEEAUUEE'
