// Generate Random Number
var randomNum = getRandomNum();

function getRandomNum() {
  return Math.floor((Math.random() * 100) + 1);
}

var secretNum = parseInt(randomNum);

// Guess Button Click Event
var guessInput = document.getElementById('user-guess');
var guessButton = document.getElementById('guess-btn');

guessButton.addEventListener('click', function(){
  if (guessInput.value > 100 || guessInput.value < 1) { alert("Your guess must be between 1 and 100!");
} else if (isNaN(guessInput.value) === true) {
  alert("Enter a valid number.");
} else {
  var userInput = guessInput.value;
  document.querySelector('.last-guess').innerText = "Your last guess was"
  document.querySelector('.show-guess').innerText = userInput;
}
  console.log(userInput, secretNum);

  if (userInput < secretNum) {
    document.querySelector('.result').innerText = "That is too low";
  } else if (userInput > secretNum) {
    document.querySelector('.result').innerText = "That is too high";
  } else if (userInput == secretNum){
    document.querySelector('.result').innerText = "Boom!".toUpperCase();
  }
});

//Clear Button Click Event
var clearButton = document.getElementById('clear-btn');

clearButton.addEventListener('click', function(){
  document.getElementById('user-guess').value = "";
});

//Reset Button Click Event
var resetButton = document.getElementById('reset-btn');

resetButton.addEventListener('click', function () {
  randomNum = getRandomNum();
  secretNum = randomNum
  document.getElementById('user-guess').value = "";
  document.querySelector('.last-guess').innerText = "";
  document.querySelector('.show-guess').innerText = "";
  document.querySelector('.result').innerText = "";
  guessButton.disabled = true;
  clearButton.disabled = true;
  resetButton.disabled = true;
})

//Enable buttons
guessInput.addEventListener('input', function() {
  guessButton.disabled = false;
  clearButton.disabled = false;
  resetButton.disabled = false;
})
