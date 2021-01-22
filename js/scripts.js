// business logic

function beepBoop(number) { 
  let roboPhrase = [];
  for (let i = 0; i <= number; i++) {
    // I struggled with the line below a lot. Ended up deciding to make a string after all, so that I can use the .includes() method.
    let numberString = i.toString();

    if (numberString.includes(3)) {
      roboPhrase.push("Won't you be my neighbor?");
    } else if (numberString.includes(2)) {
      roboPhrase.push("Boop!");
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
    let result = beepBoop(number);
    $("#output").text(result);
  });   
});
