'use strict';

/*
console.log((document.querySelector('.message')).textContent)

// alert(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = '🎉 Correct Number'

// console.log(document.querySelector('.message').textContent)
 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
// Handeling the click event
// const x = function(){
//   console.log(23)
// };
*/



let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message){
  document.querySelector('.message').textContent = message;
}
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  // When there is no number
  if (!guess){
    // document.querySelector('.message').textContent = "⛔ NO Number!";
    displayMessage("⛔ NO Number!");


    // WHen The Player wins
  }else if(guess === secretNumber){
    // document.querySelector('.message').textContent = '🎉 Correct Number.';
    displayMessage('🎉 Correct Number.');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }


    // When the guess is wrong
  }else if(guess !== secretNumber){
      if(score > 1){
        // document.querySelector(".message").textContent = guess > secretNumber? '📈Too High.':'📉 Too Low.';
        displayMessage(guess > secretNumber ? '📈Too High.':'📉 Too Low.');
        score --; 
        document.querySelector('.score').textContent = score;
      }
      else{
        // document.querySelector(".message").textContent = 'You Lost The Game 💥';
        displayMessage('You Lost The Game 💥')
        document.querySelector('.score').textContent = 0;
      }
  } 
});


// Again button

document.querySelector('.again').addEventListener('click',function(){
  score=20;
  secretNumber = Math.trunc(Math.random()*20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'

})
