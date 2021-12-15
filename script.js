'use strict';

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const getMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

// Click check button START
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When score is bigger than 0
  if (score > 0) {
    //   If there is no input
    if (!guess) {
      getMessage('No Number ⛔ ');
    }
    // When player wins
    else if (guess == secretNum) {
      getMessage(' 🎉 You made it Correctly!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '60rem';
      document.querySelector('.number').textContent = secretNum;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
    // When input value is wrong
    else if (guess !== secretNum) {
      getMessage(
        guess > secretNum
          ? 'Its bigger than your guess.. 😓'
          : 'Sorry! Please increment your guessing number 😏'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // When score is less than 0
  else {
    document.querySelector('.message').textContent = '😪 You lost the GAME!';
    document.querySelector('body').style.backgroundColor = '#D81E00';
    document.querySelector('.number').style.width = '60rem';
    document.querySelector('.number').style.fontSize = '3rem';
    document.querySelector(
      '.number'
    ).textContent = `My number was ${secretNum}`;
  }
});
// Click check button END

// Click again button START

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
});
// Click again button END