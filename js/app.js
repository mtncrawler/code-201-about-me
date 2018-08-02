'use strict';

var correctAns = 0;
var user = prompt('Welcome, what is your name?');
console.log('User name is ' + user);
alert(user + ', let\'s start the guessing game!');


//Question 1-5
function askUserQuestionsFunction() {
  var questionsArray = ['Am I an only child? ',
    'Do I have brown eyes?',
    'Do I wear contacts?',
    'Do I like soccer?',
    'Have I reached the summit at Mt Rainier?'
  ];
  var answersWordsArr = ['no', 'yes', 'no', 'yes', 'no'];
  var answersCharArr = ['n', 'y', 'n', 'y', 'n'];
  for(var i = 0; i < questionsArray.length; i++) {
    var userAnswer = prompt(questionsArray[i]).toLowerCase();
    console.log('user answer fo Q ' + i + 1);
    if (userAnswer === answersWordsArr[i] || userAnswer === answersCharArr[i]) {
      alert('You are correct!');
      // correctAns++;
      return;
    } else if (userAnswer === '') {
      alert('Invalid response');
    } else {
      alert('You are incorrect!');
    }
  }
}


//Question 6
function askUserNumberQuestionFunction() {
  for(var i = 4; i > 0; i--) {
    var userAnswer = Number(prompt('How many pizzas did I eat this week? You have ' + i + ' attempts remaining.'));
    console.log('User answer to Q6: ' + userAnswer);
    if (userAnswer < 6 && userAnswer >= 0) {
      alert('Too low! Try again.');
    }
    else if(userAnswer > 6) {
      alert('Too high! Try again.');
    } 
    else if(userAnswer === 6) {
      alert('You are correct!');
      correctAns += 1;
      break;
    }
    else {
      alert('Please enter a positive integer.');
    }
  }
}


//Question 7
function askUserStateQuestion() {
  var states = ['georgia', 'south carolina', 'washington'];
  for(var j = 6; j > 0; j--) {
    var answerSeven = prompt('Which states have I lived in? You have ' + j + ' attempts remaining.').toLowerCase();
    console.log('User answer to Q6: ' + answerSeven);
    
    if (states.includes(answerSeven)) {
      alert('You are correct! I have lived in Georgia, Washington, and South Carolina.');
      correctAns += 1;
      break;
    }
    else if (!states.includes(answerSeven)) {
      alert('Try again.');
    } else {
      alert('please enter a valid state');
    }
  }
}

function alertUserOfCorrectAnswers() {
  if(correctAns > 5) {
    alert('Well done ' + user + ', keep it up! You got ' + correctAns + ' out of 7 questions correct.');
  }
  else if(correctAns === 7) {
    alert(user + ', perfect score! You clearly know Jeremy very well. You got ' + correctAns + ' out of 7 questions correct.');
  }
  else {
    alert(user + ', better luck next time! You got ' + correctAns + ' out of 7 questions correct.');
  }
}

function main() {
  askUserQuestionsFunction();
  askUserNumberQuestionFunction();
  askUserStateQuestion();
  alertUserOfCorrectAnswers();
}

main();


