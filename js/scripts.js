// business logic

function beepBoop(numMax) { 
  var numbers = [];
  for (let i = 0; i <= numMax; i++) {
    var numberString = i.toString();
    console.log(numberString);

    if (numberString.includes(3))

  }
}


// front end logic

$(document).ready(function() {
    $("form#formOne").submit(function(event) {
    event.preventDefault();
    let numMax = ($("input#number").val()); 
    var result = beepBoop(numMax);
      $("#output").text(result);
    });
    
});