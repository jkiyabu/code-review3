//business
function countUp(input){

  var newlist = [];
  for (var list = 1; list <= input; list++) {
    newlist.push(parseInt(list));
  }
  for (var index = 0; index < input; index++) {
    if (parseInt(newlist[index]) % 3 === 0) {
      newlist[index] = "ping";
    }else if (parseInt(newlist[index]) % 5 === 0) {
      newlist[index] = "pong";
    }else{
      newlist[index] = newlist[index];
    }
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
