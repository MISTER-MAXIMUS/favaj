var x=document.querySelectorAll(".drum").length;
for (var i=0;i<x;i++)
{
    
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    
    var audio= this.innerHTML;
    makesound(audio);
    buttonAnimation(this.innerHTML);
    
});
function makesound(audio){
    switch(audio){
        case "w" :
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s" :
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d" :
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j" :
            var tom5=new Audio("./sounds/snare.mp3");
            tom5.play();
            break;
        case "k" :
            var tom6=new Audio("./sounds/crash.mp3");
            tom6.play();
            break;
        case "l" :
            var tom7=new Audio("./sounds/kick-bass.mp3");
            tom7.play();
            break;
        default: console.log(key);
    }
}

}
document.addEventListener("keydown",function (event){
    var m=event.key;
    makesound(m);
    buttonAnimation(event.key);
    
   
})
function buttonAnimation(m){
    var n=document.querySelector("."  + m);
    n.classList.add("pressed");
    setTimeout(function (){
        n.classList.remove("pressed");    
    },100);
}


