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
    $("#output").text(theirInput);
  });
});