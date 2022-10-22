'use strict';
console.log('Hello World');
// 3 ways to comment
/*** this is a multipline 
*/
/** Comment
  * each new line has a staer
  * as you can see
 */

// another way to add comment in js is with the double foward


// variables are a way to hold input or other data
 //we are using camel casing, which means the first letter of our variables is lower case and each new word is capitalized
var UserNamer;
// equal sign does not mean equals it is assigning the result of the prompt to the userName variable. It is an assingment operator.
//lets prompt a user for their name when they come to our site.
//method
let userName = prompt('What is your name?');
let nameConfirm = confirm('Is the really your name?');

console.log('What is our input for user name: ', userName);
console.log('Did they confirm? ', nameConfirm);
let time = prompt('What hour is it in 
                  Military time?');
console.log('User time is: ', time);
let message;
if(time <= 11){
 message = 'Good Morning';
}
else if (time > 12 && time <= 17){
 message = 'Good Afternoon';
}
else if (time > 18 && time < 24){
 message = 'Good Evening';
}
else {
 message = 'Hello, I dont know your time.';
}
console.log('our message from if else condition is: ', message);
document.write('Hello ' + userName + '! ' + message);

