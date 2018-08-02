'use strict';

var correctAns = 0;

var user = prompt('Welcome, what is your name?');
console.log('User name is ' + user);

alert(user + ', let\'s start the guessing game!');
var answerOne = prompt('Am I an only child? ').toLowerCase();
console.log('User answer to Q1: ' + answerOne);

if (answerOne === 'y' || answerOne === 'yes') {
  alert('You are incorrect!');
} else if (answerOne === 'n' || answerOne === 'no') {
  alert('You are correct!');
  correctAns += 1;
} else {
  alert('Invalid response. Please enter yes(Y) or no(N).');
}

var answerTwo = prompt('Do I have brown eyes?').toLowerCase();
console.log('User answer to Q2: ' + answerTwo);

if (answerTwo === 'y' || answerTwo === 'yes') {
  alert('You are correct!');
  correctAns += 1;
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
  correctAns += 1;
} else {
  alert('Invalid response. Please enter yes(Y) or no(N).');
}

var answerFour = prompt('Do I like soccer?').toLowerCase();
console.log('User answer to Q4: ' + answerFour);

if (answerFour === 'y' || answerFour === 'yes') {
  alert('You are correct!');
  correctAns += 1;
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
  correctAns += 1;
} else {
  alert('Invalid response. Please enter yes(Y) or no(N).');
}

for(var i = 4; i > 0; i--) {
  var answerSix = prompt('How many pizzas did I eat this week? You have ' + i + ' attempts remaining.');
  console.log('User answer to Q6: ' + answerSix);
  
  if (answerSix < 6 && answerSix >= 0) {
    alert('Too low! Try again.');
  }
  else if(answerSix > 6) {
    alert('Too high! Try again.');
  } 
  else if(answerSix == 6) {
    alert('You are correct!');
    correctAns += 1;
    break;
  }
  else {
    alert('Please enter a positive integer.');
  }
}

var states = ['georgia', 'south carolina', 'washington'];

for(var j = 6; j > 0; j--) {
  var answerSeven = prompt('Which states have I lived in? You have ' + j + ' attempts remaining.').toLowerCase();
  console.log('User answer to Q6: ' + answerSeven);
  
  if (states.includes(answerSeven)) {
    alert('You are correct! I have lived in Georgia, Washington, and South Carolina.');
    correctAns += 1;
    break;
  }
  else {
    alert('Try again.');
  }
}

if(correctAns > 5) {
  alert('Well done ' + user + ', keep it up! You got ' + correctAns + ' out of 7 questions correct.');
}
else if(correctAns == 7) {
  alert(user + ', perfect score! You clearly know Jeremy very well. You got ' + correctAns + ' out of 7 questions correct.');
}
else {
  alert(user + ', better luck next time! You got ' + correctAns + ' out of 7 questions correct.');
}

