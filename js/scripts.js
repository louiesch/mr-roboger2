// business logic

function beepBoop(number) { 
  let roboPhrase = [];
  for (let i = 0; i <= number; i++) {
    
    let numberString = i.toString();

    if (numberString.includes("3")) {
      roboPhrase.push(" Won't you be my neighbor?");
    } else if (numberString.includes("2")) {
      roboPhrase.push(" Boop!");
    } else if (numberString.includes("1")) {
      roboPhrase.push(" Beep!");
    } else {
      roboPhrase.push(" " + numberString)
    } 
    //console.log(roboPhrase);
  };
  return roboPhrase
};

// front end logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const number = ($("input#number").val()); 
    let result = beepBoop(number);
    $("#output").text(result);
  });   
});
