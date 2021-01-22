// business logic

function beepBoop(number) { 
  var roboPhrase = [];
  for (let i = 0; i <= number; i++) {
    // I struggled with the line below a lot. Ended up deciding to make a string after all, so that I can use the .includes() method.
    var numberString = i.toString();
    //console.log(numberString);
    if (numberString.includes(3)) {
      roboPhrase.push("Won't you be my neighbor?");
    // it was at this point that I realized I also needed my else statement for the test to work.
    } else {
      roboPhrase.push(numberString)
    }
      console.log(roboPhrase);
  };
};


// front end logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let number = ($("input#number").val()); 
    var result = beepBoop(number);
    $("#output").text(result);
  });   
});
