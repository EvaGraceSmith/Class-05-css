'use strict';
console.log('Hello World');
// 3 ways to comment
/*** this is a multipline 
*/
/** Comment
  * each new line has a star
  * as you can see
 */

// another way to add comment in js is with the double foward


// variables are a way to hold input or other data
 //we are using camel casing, which means the first letter of our variables is lower case and each new word is capitalized
var UserNamer;
// equal sign does not mean equals it is assigning the result of the prompt to the userName variable. It is an assingment operator.
//lets prompt a user for their name when they come to our site.
//method
let userName = prompt('What is your cat\'s name?');
let nameConfirm = confirm('Is that really the name of your cat?');

console.log('What is our input for user name: ', userName);
console.log('Did they confirm? ', nameConfirm);
let time = prompt('What hour is it in Military time?');
console.log('User time is: ', time);
let message;
if(time <= 11){
 message = 'Top O\' da Mornin\' to ya!';
}
else if (time > 12 && time <= 17){
 message = 'G\'Day Mate';
}
else if (time > 18 && time < 24){
 message = 'Nighty Night!';
}
else {
 message = 'Hello, I dont know your time.';
}
console.log('our message from if else condition is: ', message);
document.write('Hello ' + userName + '! ' + message);

