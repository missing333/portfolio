var drumButtons = document.querySelectorAll(".drum");
var audio;

for(i=0;i<drumButtons.length;i++){
    drumButtons[i].addEventListener("click", onClick);
}

function onClick(){

    //alert("i was clicked!");
    console.log(this.innerHTML);
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}
document.addEventListener("keydown", function (event){
    
    console.log(event.key + " key was pressed!" );
    playSound(event.key);
    buttonAnimation(event.key);
    
});


function playSound(key){
    switch(key){
        case "w":
            audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        case "a":
            audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
        break;
        
        case "s":
            audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        break;
        
        case "d":
            audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        break;
        
        case "j":
            audio = new Audio('./sounds/snare.mp3');
            audio.play();
        break;
        
        case "k":
            audio = new Audio('./sounds/crash.mp3');
            audio.play();
        break;
        
        case "l":
            audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
        break;

        default:
            console.log(key);

    }
}


function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
    
}