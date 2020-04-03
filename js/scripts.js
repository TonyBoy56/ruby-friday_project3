//////////////////////////////// Back-end logic ////////////////////////////////

function findTheRange(theirInput) {
  var rangeArray = [];
  for (var i= 0; i <= theirInput; i++) {
    rangeArray.push(i);
  }
}
//////////////////////////////// Front-end logic ////////////////////////////////
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var theirInput = parseInt($("#userInput").val());
    console.log(theirInput);
    if (isNaN(theirInput)) {
      alert("Ay yo, we need numbers up in this. Input a number next time");
    }
  });
});