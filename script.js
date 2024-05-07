'use strict';
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = '8';
document.querySelector('.score').textContent = '10';
console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value = '8';
*/

const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let currentScore = 20;
document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess)
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!'
    } else if (guess == randomNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
    } else if (guess > randomNumber) {
        document.querySelector('.message').textContent = 'Too high!'
        currentScore--;
        document.querySelector('.score').textContent = currentScore;
    } else if (guess < randomNumber) {
        document.querySelector('.message').textContent = 'Too low!'
        currentScore--;
        document.querySelector('.score').textContent = currentScore;
    }
}) 