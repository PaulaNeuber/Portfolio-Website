$(document).ready(function(){ 
  $("#test").on("click", function(){
    console.log("clicked");
    return false;
  });

  $(".message-box").on("keyup", function(){
    console.log("keyup happened");
  });

  var comment= $(".message-box").val();
    console.log(comment)

  var nameName=3;
  var name="string";
  var charCount = $(".message-box").val().length
    console.log(charCount)
});

