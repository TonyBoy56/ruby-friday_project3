//////////////////////////////// Back-end logic ////////////////////////////////

function findTheRange(theirInput) {
  var rangeArray = [];
  for (var i= 0; i <= theirInput; i++) {
    var newString = i.toString();
    rangeArray.push(newString);
    if (newString.includes("3")) {
      rangeArray[i] = " Won't you be my neighbor?";
    } else if (newString.includes("2")) {
      rangeArray[i] = " Boop!";
    } else if (newString.includes("1")) {
      rangeArray[i] = " Beep!";
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