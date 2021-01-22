// business logic

const 


// UI logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("input#number").val());
    let output = beepBoop(number);
  });
});