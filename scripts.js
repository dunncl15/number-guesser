// Global Variables
var secretNum = getRandomNum();
var guessInput = document.getElementById('user-guess');
var guessButton = document.getElementById('guess-btn');
var clearButton = document.getElementById('clear-btn');
var resetButton = document.getElementById('reset-btn');
var enterButton = document.getElementById('enter-btn');
var minInput = document.getElementById('min');
var maxInput = document.getElementById('max');
var newRangeText = document.querySelector('.new-range');
var minNum = 1;
var maxNum = 100;

//EVENT LISTENERS

// Guess Button Click Event
guessButton.addEventListener('click', function(){
  if (userNum() > maxNum || userNum() < minNum) {      alert("Your guess must be between " + minNum + " and " + maxNum);
} else if (isNaN(userNum()) === true) {
    alert("Enter a valid number.");
} else {
  var displayGuess = document.querySelector('.display-guess');
  displayGuess.style.display = 'block';
  var initialRange = document.querySelector('.initial-range');
  initialRange.style.display = 'none';
  document.querySelector('.last-guess').innerText = "Your last guess was"
  document.querySelector('.show-guess').innerText = userNum();
  }
  userResult();

  console.log(userNum(), secretNum);
});

//Clear Button Click Event
clearButton.addEventListener('click', function(){
  document.getElementById('user-guess').value = "";
});

//Reset Button Click Event
resetButton.addEventListener('click', function () {
  secretNum = getRandomNum();
  guessInput.value = "";
  document.querySelector('.last-guess').innerText = "";
  document.querySelector('.show-guess').innerText = "";
  document.querySelector('.result').innerText = "";
  document.querySelector('.new-range').innerText = "";
  var initialRange = document.querySelector('.initial-range');
  initialRange.style.display = 'block';
  var hideMinMax = document.querySelector('.min-max-section');
  hideMinMax.style.display = 'none';
  maxInput.value = "";
  minInput.value = "";
  disableButtons();
})

//Initial Guess Field Input Event
guessInput.addEventListener('input', function() {
  if (guessInput.value === "") {
    disableButtons();
  } else {
    enableButtons();
  }
})

//Min Input Event
minInput.addEventListener('input', function() {
  if (minInput.value === "") {
    var activeBtn = enterButton.disabled = true;
    return activeBtn;
  } else {
    var inactiveBtn = enterButton.disabled = false;
    return inactiveBtn;
  }
})

//Enter button event listener
enterButton.addEventListener('click', function() {
  customRange();
  document.querySelector('.level-2-instructions').innerText = "";
  var displayGuess = document.querySelector('.display-guess');
  displayGuess.style.display = 'none';
  guessInput.value = "";
  var inactiveBtn = guessButton.disabled = true;
  return inactiveBtn;
})

//FUNCTIONS

//Guess Results
function userResult() {
  if (userNum() < secretNum) {
    document.querySelector('.result').innerText = "That is too low";
  } else if (userNum() > secretNum) {
    document.querySelector('.result').innerText = "That is too high";
  } else if (userNum() === secretNum){
    document.querySelector('.result').innerText = "Boom!".toUpperCase();
    nextLevel();
  }
}

//Show Level 2
function nextLevel() {
    document.querySelector('.level-2-instructions').innerText = "Enter a new min and max, then guess again!"
    var minMax = document.querySelector('.min-max-section');
    minMax.style.display = 'unset';
    if (minMax.style.display === 'unset' && minInput.value !== "") {
      compRange();
    } else {

    }
}

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
 function userNum() {
  var userNum = parseInt(guessInput.value);
  return userNum;
}

//CUSTOM RANGE FUNCTIONS

//Generate New Range
function compRange() {
  rangeMax();
  rangeMin();
  secretNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  minInput.value = minNum;
  maxInput.value = maxNum;
  newRangeText.innerText = "Your new range is between " + minNum + " and " + maxNum + ".";
}

function customRange() {
  secretNum = Math.floor(Math.random() * (newMax() - newMin() + 1) + newMin());
  newRangeText.innerText = "Your new range is between " + minNum + " and " + maxNum + ".";
}

//Convert User Min to a Number
function newMin() {
  minNum = parseInt(minInput.value);
  return minNum;
}

//Convert User Max to a Number
function newMax() {
  maxNum = parseInt(maxInput.value);
  return maxNum;
}

//User Min -10
function rangeMin() {
  minNum -= 10;
  return minNum;
}

//User Max +10
function rangeMax() {
  maxNum += 10;
  return maxNum;
}
