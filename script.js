'use strict';
// DOM -document object model, tree structure

//Dom is not part of JS

//to select class . (class selector()) , nothing for content

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1; //trunc to cut of fraction
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // doing this as we get string ,converting it to num;
  console.log(guess);

  // When There is no Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  // When player Wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Thats it BOSS !';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  // when guess is Higher
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High Dude';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when Guess is lower
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low Dude';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
