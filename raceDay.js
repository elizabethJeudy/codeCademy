/*
In this pracitce we are creating 
*/

// step 1: this varible was given ; ensures we get random whole numbers
let raceNumber = Math.floor(Math.random() * 1000);

// step 2: create variable showing if runner registered early or not
let registeredEarly = true;

// step 3: create variable for runner's age
let runnerAge = 19;

// step 4: create control flow statement checking runner is adult and registered early, add 1000 to race number is true
if (runnerAge > 18 && registeredEarly) {
	raceNumber += 1000;
}

// step 5: create cfs checking age and registration time, add race number
// step 6: add else if runner is over 18 and didn't register
// step 7: check for those younger than 18 whether registered or not
// step 8: add else for those exactly 18
if (runnerAge > 18 && registeredEarly) {
	console.log(
		`Your race will begin at 9:30am and your race number is ${raceNumber}`
	);
} else if (runnerAge > 18 && !registeredEarly) {
	console.log(
		`Your race will begin at 11:00am and your race number is ${raceNumber}`
	);
} else if (runnerAge < 18) {
	console.log(
		`Your race will begin at 12:30pm and your race number is ${raceNumber}`
	);
} else {
	console.log("Please visit the registration desk");
}
