var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
   // mode button for enentListeners
   setupModeButtons()
  
  //square listeners
  setupSquares();
  
 
  reset();
  
};
 


function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
    modeButtons[0].classList.remove('selected');
    modeButtons[1].classList.remove('selected');
    this.classList.add('selected');
    if(this.textContent === 'Easy'){
      numSquares = 3;
    }else {
      numSquares = 6;
    }
    reset();
  });
 }
};

function setupSquares(){
  for(var i = 0; i < squares.length;i++){
 
  // add click listeners to squares
   squares[i].addEventListener('click', function(){
    // grab color of clicked square
     var clickedColor = this.style.backgroundColor;
     
    // compare color to pickedColor
     if(clickedColor === pickedColor){
       messageDisplay.textContent = 'Correct!';
       changeColors(clickedColor);
       h1.style.backgroundColor = clickedColor;
       resetButton.textContent = 'Play Again!'
     }else{
       this.style.backgroundColor = '#232323';
       messageDisplay.textContent = 'Wrong! Try Again!!';
       resetButton.textContent = 'New Color!'
     }
  });
};
};

function reset(){
  // generate all new colors
  colors = generalRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickeColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for(var i = 0; i < squares.length;i++){
  // add initial colors to square
    if(colors[i]){
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = 'none';
    }
  
  };
  messageDisplay.textContent = '';
  h1.style.backgroundColor = 'steelblue';
  resetButton.textContent = 'New Color!';
};

/*
easyBtn.addEventListener('click', function(){
  hardBtn.classList.remove('selected');
  easyBtn.classList.add('selected');
  numSquares = 3;
  colors = generalRandomColors(numSquares);
  pickedColor = pickeColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = 'none';
    };
  };
});


hardBtn.addEventListener('click', function(){
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  numSquares = 6;
  colors = generalRandomColors(numSquares);
  pickedColor = pickeColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
    
  };
  
});


*/


resetButton.addEventListener('click', function(){
  reset();
});


function changeColors (color) {
  // loop trough all square
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  };
      
  
};

function pickeColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generalRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color  and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
};

function randomColor(){
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g +", " + b +")";
};










