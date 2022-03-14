// document.querySelector(".sound").addEventListener("click",function(){
//     alert("i got clicked");
// })
for(var i = 0; i<document.querySelectorAll(".sound").length;i++){
    document.querySelectorAll(".sound")[i].addEventListener("click",function(){
        var choice = this.innerHTML;
        check(choice);
    });
    
    }
    document.addEventListener("keydown",function(event){
        var choice = event.key;
        choice = choice.toUpperCase();
        check(choice);
    });

function check(choice){
    switch(choice){
        case ('A' || 'a'): 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'S': 
            var audio = new Audio("sounds/drum-1.mp3");
            audio.play();
            break;
        case 'D': 
            var audio = new Audio("sounds/drum-2.mp3");
            audio.play();
            break;
        case 'F': 
            var audio = new Audio("sounds/drum-3.mp3");
            audio.play();
            break;
        case 'G': 
            var audio = new Audio("sounds/drum-4.mp3");
            audio.play();
            break;
        case 'H': 
            var audio = new Audio("sounds/guitar.wav");
            audio.play();
            break;
        case 'J': 
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'K': 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();            
            break;
        case 'L': 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default: console.log("key press not applicable");
        break;
    }
}