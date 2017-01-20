$(document).ready(function() {
  $("form#pingPong").submit(function() {
    event.preventDefault();
    var input = $("#number").val();
    console.log();
    $("#result").text(input);
    console.log();
  });
});
