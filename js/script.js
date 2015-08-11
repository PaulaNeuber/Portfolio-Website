$(document).ready(function(){ 
  $("#test").on("click", function(){
    var comment= $(".message-box").val();
    console.log(comment)
  });

  $(".message-box").on("keyup", function(){
    console.log("keyup happened");
    var nameName=3;
    var name="string";
    var charCount = $(".message-box").val().length
    console.log(charCount)
  });

});

