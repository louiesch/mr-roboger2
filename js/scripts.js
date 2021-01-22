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

//function replaceNumbers(beepBoop) {
function beepBoop (maxNumber)
  let numbersArray = []; 
  for (let i = 0; i <= maxNumber; i++) {
    let numbers = i.toString();
    console.log(numbers);
  };

  //for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray.includes(3)) {
      
      let number = numbersArray[i];
      let beepBoop = number.replace(number, '')
      let result = beepBoop + "Won't you be my neighbor?";
      console.log(result)
    }
  
//}