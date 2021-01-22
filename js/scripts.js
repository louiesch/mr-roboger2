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

let beepBoop = function(userInput) {
  let numbersString = []; 
  for (let i = 0; i <= userInput; i++) {
  numbersString.push(i.toString());
  console.log(numbersString)
  };
};


// const toArray = str.split('').map(function(numberList) {
//   return parseInt(numberList);
//   console.log(number)
