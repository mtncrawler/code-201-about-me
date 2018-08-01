'use strict';

alert('Do you know Jeremy?');
var answerOne = prompt('Am I an only child? ').toLowerCase();
console.log('User answer to Q1: ' + answerOne);

if (answerOne === 'y' || answerOne === 'yes') {
  alert('You are incorrect!');
} else if (answerOne === 'n' || answerOne === 'no') {
  alert('You are correct!');
} else {
  alert('Invalid response. Please enter yes(Y) or no(N).');
}

var answerTwo = prompt('Do I have brown eyes?').toLowerCase();
console.log('User answer to Q2: ' + answerTwo);

if (answerTwo === 'y' || answerTwo === 'yes') {
  alert('You are correct!');
} else if (answerTwo === 'n' || answerTwo === 'no') {
  alert('You are incorrect!');
} else {
  alert('Invalid response. Please enter yes(Y) or no(N).');
}

var answerThree = prompt('Do I wear contacts?').toLowerCase();
console.log('User answer to Q3: ' + answerThree);

if (answerThree === 'y' || answerThree === 'yes') {
  alert('You are incorrect!');
} else if (answerThree === 'n' || answerThree === 'no') {
  alert('You are correct!');
} else {
  alert('Invalid response. Please enter yes(Y) or no(N).');
}

var answerFour = prompt('Do I like soccer?').toLowerCase();
console.log('User answer to Q4: ' + answerFour);

if (answerFour === 'y' || answerFour === 'yes') {
  alert('You are correct!');
} else if (answerFour === 'n' || answerFour === 'no') {
  alert('You are incorrect!');
} else {
  alert('Invalid response. Please enter yes(Y) or no(N).');
}

var answerFive = prompt('Have I reached the summit at Mt Rainier?').toLowerCase();
console.log('User answer to Q5: ' + answerFive);

if (answerFive === 'y' || answerFive === 'yes') {
  alert('You are incorrect!');
} else if (answerFive === 'n' || answerFive === 'no') {
  alert('You are correct!');
} else {
  alert('Invalid response. Please enter yes(Y) or no(N).');
}