 var buttonColor = ["red", "blue", "green", "yellow"];

 var gamePattern = [] 

 var userClickedPattern = []

 $(".btn").click(function(){

  var  userChoosenColor = $(this).attr("id")

  userClickedPattern.push(userChoosenColor);



 })
// console.log(userClickedPattern)

 function nextSequence(){
      
    var randomnumber = Math.floor( Math.random()*4);
    
    var randomChoosenColor = buttonColor[randomnumber];

    gamePattern.push[randomChoosenColor] 

    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChoosenColor)
   
 }

 function playSound(name){
     var audio = new Audio("sounds/"  + name + ".mp3");

    audio.play();
 }

function animatePress(currentColor){
   $("#" + currentColor ).addClass("pressed");

   setTimeout(function(){
      $("#" + currentColor).removeClass("pressed");

   },100);
}

if ( gamePattern === userClickedPattern){

   $("h1").Text("click any key")
}
else{
   $("h1").Text("press a key to start")
}