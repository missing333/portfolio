var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var currentLevel = 0;


$(document).keypress(function(){
    if(currentLevel == 0){
        gamePattern = [];
        nextSequence();
        console.log("Game start");
    }
})


function nextSequence(){
    var randNumber = Math.floor(Math.random()*4);    
    var randChosenColor = buttonColors[randNumber];
    userClickedPattern = [];

    gamePattern.push(randChosenColor);
    console.log("NextSequence");
    console.log(gamePattern);
    currentLevel++;
    $("h1").text("Level " + currentLevel);
    
    playSound(randChosenColor);
}

$(".btn").click(function(event){
    var color = event.target.id;    
    var self = $(this);


    userClickedPattern.push(color);
    console.log("User Pattern:");
    console.log(userClickedPattern);

    playSound(color);
    checkAnswer(color);

})

function playSound(selector) {
    switch (selector) {
        case "red":
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;

        case "blue":
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
            break;

        case "green":
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            break;

        case "yellow":
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;

        default:
            console.log(selector);
    }
    var self = $("."+selector);
    self.addClass("pressed");
    setTimeout(function(){
        self.removeClass("pressed");
    }, 300);

}

function checkAnswer(pickValue){
    
    var latestPickNumber = userClickedPattern.length-1;
    if(pickValue == gamePattern[latestPickNumber]){
        console.log("success.");

        if(latestPickNumber+1 >= currentLevel){
            
            setTimeout(function() {
                nextSequence();  //add new color to gamePattern
              }, 1000);
            
            
        }
    }
        
    else{
        console.log("wrong.");
        currentLevel = 0;
        var lose = new Audio("sounds/wrong.mp3");
        lose.play();
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");}, 2000);
        $("h1").text("Game Over!!  Press any key to restart");
        
    }
}

