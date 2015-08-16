$(document).ready(function(){ 
  var rows=$(".my-row");
  console.log(rows);
for (var i=0; i<rows.length; ++i) {
  if (i%2===0) {
    $(rows[i]).css("background-color","blue");
  };
};

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

