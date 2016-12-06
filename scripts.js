// Generate Random Number
// var getRandomNum = function() {
//   Math.floor((Math.random() * 100) + 1);
// }
var randomNum = Math.floor((Math.random() * 100) + 1);
var secretNum = parseInt(randomNum);

// Guess Button Click Event
var guessInput = document.getElementById('user-guess');
var guessButton = document.getElementById('guess-btn');

guessButton.addEventListener('click', function(){
  var userInput = guessInput.value;
  document.querySelector('.last-guess').innerText = userInput;
  
  console.log(userInput, secretNum);

  if (userInput === secretNum) {
    document.querySelector('.result').innerText = "Boom!";
  } else if (userInput > secretNum) {
    document.querySelector('.result').innerText = "That is too high";
  } else {
    document.querySelector('.result').innerText = "That is too low";
  }
});
