//business
function countUp(input){

  var newlist = [];
  for (var list = 1; list <= input; list++) {
      newlist.push(parseInt(list));
  }
  return newlist;

}

//user-interface
$(document).ready(function() {
  $("form#pingPong").submit(function() {
    event.preventDefault();
    var input = $("#number").val();
    console.log(countUp(input));
    $("#result").text(countUp(input));
    console.log();
  });
});
