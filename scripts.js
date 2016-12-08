// Global Variables
var secretNum = getRandomNum();
var guessInput = document.getElementById('user-guess');
// var userGuess = changeToNum();
var guessButton = document.getElementById('guess-btn');
var clearButton = document.getElementById('clear-btn');
var resetButton = document.getElementById('reset-btn');
var enterButton = document.getElementById('enter-btn');
var minInput = document.getElementById('min');
var maxInput = document.getElementById('max');

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

//Show Level 2
function nextLevel() {
    document.querySelector('.level-2').innerText = "Ready for level 2?";
    document.querySelector('.level-2-instructions').innerText = "Enter a new min and max, then guess again!"
    var minMax =     document.querySelector('.min-max-section');
    minMax.style.display = 'unset';
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
 function changeToNum() {
  var userNum = parseInt(guessInput.value);
  return userNum;
}

//Generate New Range
function customRange(newMin, newMax) {
  return Math.floor(Math.random() * (newMax() - newMin()) + newMax());
  console.log(newMin(), newMax());
}

//Convert Min to a Number
function newMin() {
  var userMin = parseInt(minInput.value);
  return userMin;
}

//Convert Max to a Number
function newMax() {
  var userMax = parseInt(maxInput.value);
  return userMax;
}
