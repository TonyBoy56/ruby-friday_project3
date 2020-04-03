//////////////////////////////// Back-end logic ////////////////////////////////

function findTheRange(theirInput) {
  var rangeArray = [];
  for (var i= 0; i <= theirInput; i++) {
    rangeArray.push(i);
    var newString = i.toString();
    console.log(newString);
    if (newString.includes("3")) {
      rangeArray[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
    }
  }
  return rangeArray;
}
//////////////////////////////// Front-end logic ////////////////////////////////
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var theirInput = parseInt($("#userInput").val());
    if (isNaN(theirInput)) {
      alert("Ay yo, we need numbers up in this. Input a number next time.");
    } else {
      $("#output").text(findTheRange(theirInput));
    }
  });
});