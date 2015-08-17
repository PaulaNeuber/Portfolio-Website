var myKitties = [ 
{ title: "Malteser Hilfsdienst e.V.", pic: "img/malteser2.jpg" }, 
{ title: "MWS Industrie- holding GmbH", pic: "img/mws.png" }, 
{ title: "Youth for Understanding e.V.", pic: "yfu.png" }, 
{ title: "Motorradland GmbH", pic: "img/motorradland.png" }
];
$(document).ready(function(){ 
//   var rows=$(".my-row");
//   console.log(rows);
// for (var i=0; i<rows.length; ++i) {
//   if (i%2===0) {
//     $(rows[i]).css("background-color","blue");
//   };
// };
  for(var i=0; i<myKitties.length; ++i) {
        $( "#" + i ).css("background-image", "url(" + myKitties[i].pic + ")" );
  }; 

$(".image").mouseenter( function() {
      console.log(myKitties[this.id].title);
      $(this).html("<p class='info'><span class='proj-title'></span> " + myKitties[this.id].title + "</p>");
}).mouseleave( function() {
      $("p.info").html("");
});


  $(".message-box").on("keyup", function() {
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

