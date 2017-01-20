//business
function countUp(input){
  var newList = [];
  for (var list = 1; list <= input; list++) {
    newList.push(parseInt(list));
  }
  for (var index = 0; index < input; index++) {
    if (parseInt(newList[index]) % 3 === 0 && parseInt(newList[index]) % 5 != 0) {
      newList[index] = "ping";
    }else if (parseInt(newList[index]) % 5 === 0 && parseInt(newList[index]) % 3 != 0) {
      newList[index] = "pong";
    }else if (parseInt(newList[index]) % 3 === 0 && parseInt(newList[index]) % 5 === 0) {
      newList[index] = "pingpong";
    }else{
      newList[index] = newList[index];
    }
  }
  var finalList = newList.join('\n');
  return finalList;
}

//user-interface
$(document).ready(function() {
  $("form#pingPong").submit(function() {
    event.preventDefault();
    var input = $("#number").val();
    $("#result").text(countUp(input));
  });
});
