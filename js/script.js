$(document).ready(function(){ 

  $("#test").on("click", function(){
    var comment= $(".message-box").val();
    console.log(comment)
   $("#visible-comment").html(comment); 
  });

  $(".message-box").on("keyup", function(){
    console.log("keyup happened");
    var nameName=3;
    var name="string";
    var charCount = $(".message-box").val().length
    console.log(charCount);
      $("#char-count").html(charCount);
        if(charCount>50) {
          $("#char-count").css("color","red");
        } else {
          $("#char-count").css("color","black");
        };
  });
});

