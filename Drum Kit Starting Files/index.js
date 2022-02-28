var l=document.querySelectorAll(".drum").length;
function playsound(bt)
{
    switch(bt)
    {
        case 'w':
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
                var audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
        case 's':
                    var audio=new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
        case 'd':
                        var audio=new Audio('sounds/tom-1.mp3');
                        audio.play();
                        break;
        case 'j':
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
                console.log(error);
                break;

    }
}
for(var i=0;i<l;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var k=this.innerHTML;

        playsound(k);
        buttanima(k);
    });
    document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){
       
        playsound(event.key);
        buttanima(event.key);

    });
    
}
function buttanima(ty)
{
    var bu=document.querySelector("."+ty);
    bu.classList.add("pressed");
    setTimeout(function(){bu.classList.remove("pressed")},100);

}
