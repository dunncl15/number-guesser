// Global Variables
var secretNum = getRandomNum();
var guessInput = document.getElementById('user-guess');
// var userGuess = changeToNum();
var guessButton = document.getElementById('guess-btn');
var clearButton = document.getElementById('clear-btn');
var resetButton = document.getElementById('reset-btn');


// Guess Button Click Event
guessButton.addEventListener('click', function(){
  if (changeToNum() > 100 || changeToNum() < 1) { alert("Your guess must be between 1 and 100!");
} else if (isNaN(changeToNum()) === true) {
  alert("Enter a valid number.");
} else {
  document.querySelector('.last-guess').innerText = "Your last guess was"
  document.querySelector('.show-guess').innerText = changeToNum();
}
  console.log(changeToNum(), secretNum);

  if (changeToNum() < secretNum) {
    document.querySelector('.result').innerText = "That is too low";
  } else if (changeToNum() > secretNum) {
    document.querySelector('.result').innerText = "That is too high";
  } else if (changeToNum() === secretNum){
    document.querySelector('.result').innerText = "Boom!".toUpperCase();
    nextLevel();
  }
});

//Level 2 function
function nextLevel() {
    document.querySelector('.level-2').innerText = "Ready for level 2?";
    var minMax =     document.querySelector('.min-max-section');
    minMax.style.display = 'unset';
}

//Clear Button Click Event
clearButton.addEventListener('click', function(){
  document.getElementById('user-guess').value = "";
});

//Reset Button Click Event
resetButton.addEventListener('click', function () {
  getRandomNum();
  document.getElementById('user-guess').value = "";
  document.querySelector('.last-guess').innerText = "";
  document.querySelector('.show-guess').innerText = "";
  document.querySelector('.result').innerText = "";
  disableButtons();
})

//Input Event
guessInput.addEventListener('input', function() {
  if (guessInput.value === "") {
    disableButtons();
  } else {
    enableButtons();
  }
})

//Disable buttons
function disableButtons() {
  var notActive =
  guessButton.disabled = true;
  clearButton.disabled = true;
  resetButton.disabled = true;
  return notActive;
}

//Enable buttons
function enableButtons() {
  var active =
  guessButton.disabled = false;
  clearButton.disabled = false;
  resetButton.disabled = false;
  return active;
}

//Generate Random Number
function getRandomNum() {
  return Math.floor((Math.random() * 100) + 1);
}

//Convert User's Guess to a Number
 function changeToNum() {
  var userNum = parseInt(guessInput.value);
  return userNum;
}
