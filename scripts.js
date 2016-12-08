// Global Variables
var secretNum = getRandomNum();
var guessInput = document.getElementById('user-guess');
var guessButton = document.getElementById('guess-btn');
var clearButton = document.getElementById('clear-btn');
var resetButton = document.getElementById('reset-btn');
var enterButton = document.getElementById('enter-btn');
var minInput = document.getElementById('min');
var maxInput = document.getElementById('max');
var minNum = 0;
var maxNum = 100;

//EVENT LISTENERS

// Guess Button Click Event
guessButton.addEventListener('click', function(){
  if (changeToNum() > maxNum || changeToNum() < minNum) { alert("Your guess must be between " + minNum + " and " + maxNum);
} else if (isNaN(changeToNum()) === true) {
  alert("Enter a valid number.");
} else {
  document.querySelector('.last-guess').innerText = "Your last guess was"
  document.querySelector('.show-guess').innerText = changeToNum();
}
  if (changeToNum() < secretNum) {
    document.querySelector('.result').innerText = "That is too low";
  } else if (changeToNum() > secretNum) {
    document.querySelector('.result').innerText = "That is too high";
  } else if (changeToNum() === secretNum){
    document.querySelector('.result').innerText = "Boom!".toUpperCase();
    nextLevel();
  }
  console.log(changeToNum(), secretNum);
});

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

//Initial Guess Field Input Event
guessInput.addEventListener('input', function() {
  if (guessInput.value === "") {
    disableButtons();
  } else {
    enableButtons();
  }
})

//Show Level 2
function nextLevel() {
    document.querySelector('.level-2').innerText = "Ready for level 2?";
    document.querySelector('.level-2-instructions').innerText = "Enter a new min and max, then guess again!"
    var minMax =     document.querySelector('.min-max-section');
    minMax.style.display = 'unset';
}

//Min and Max Input Event
minInput.addEventListener('input', function() {
  if (minInput.value === "") {
    var activeBtn = enterButton.disabled = true;
    return activeBtn;
  } else {
    var inactiveBtn = enterButton.disabled = false;
    return inactiveBtn
  }
})

enterButton.addEventListener('click', function() {
  customRange();
  document.querySelector('.new-range').innerText = "Your new range is between " + newMin() + " and " + newMax() + "."
  document.querySelector('.level-2').innerText = "";
  document.querySelector('.level-2-instructions').innerText = "";
})

//FUNCTIONS

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

//CUSTOM RANGE FUNCTIONS

//Generate New Range
function customRange() {
  secretNum = Math.floor(Math.random() * (newMax() - newMin() + 1) + newMin());
}

//Convert Min to a Number
function newMin() {
  minNum = parseInt(minInput.value);
  return minNum;
}

//Convert Max to a Number
function newMax() {
  maxNum = parseInt(maxInput.value);
  return maxNum;
}
