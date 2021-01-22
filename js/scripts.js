// UI logic

$(document).ready(function() {
  $('form#formOne').submit(function(event) {
    event.preventDefault()
    // let userInput = parseInt($('input#userInput').val());
    // let result
//     let output = beepBoop(number);
//     $('#output').text(output);
//     $('#output').show();
    });
  });
  
  
  // business logic

//let beepBoop = function(userInput) {
  let numbersArray = []; 
  for (let i = 0; i <= userInput; i++) {
  numbersArray.push(i);
  console.log(numbersArray)
  };


