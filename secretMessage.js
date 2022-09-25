/*
in this practice there is a secret message to be decoded using arrays, 
and array methods such as slice, pop, shift and unshift 
*/

// given 
let secretMessage = ['Leanring', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'its', 'about', 'what', 'you', 'can', 'figure', 'out.' , '-2015', 'Chris', 'Pine', 'Learn', 'Javascript'];

// step 1: use and array method to remove the last string 
secretMessage.pop(); 
console.log(secretMessage.length);

// step 2: use array method to add words 'to' and 'program' as separate strings to array
secretMessage.push('to', 'Program'); 

// step 3: change the word 'easily' to the word 'right' by accessing the index and replacing it
secretMessage[7] = 'right'; 

// step 4: use array method to remove the first string
secretMessage.shift(); 

// step 5: use array method to add string 'programming' to the beginning of array
secretMessage.unshift('Programming'); 

// step 6: use array method to remove the strings 'get', 'right', 'the','first','time' and replace with 'know'
secretMessage.splice(6,11,'know'); 

// step 7: use .join() to pring the secret message
console.log(secretMessage.join()); 
     // Programming,is,not,about,what,you,know,figure,out.,-2015,,Chris,Pine,,Learn,to,Program