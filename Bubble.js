var htinum=0;
function makebubble(){
    var clutter="";
    for(i=0; i<=50; i++){
       htinum= Math.floor(Math.random()*10);
       clutter+= `<div class="bubble">${htinum}</div>`
    };
    document.querySelector('.pbtn').innerHTML= clutter;
};
makebubble();
var timer=60;
function runtimer(){
   let vartimer= setInterval(function(){
if(timer>0){
    timer--;
    document.querySelector("#ti").textContent=timer;
}
else{
    clearInterval(vartimer);
    document.querySelector(".pbtn").innerHTML="<h2>Game Over</h2>";
}
    },1000);
}
runtimer();

function newhit(){
    var nm= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=nm;
    
}
newhit();

var score= 0;
function increasescore(){
    score+=10;
    document.querySelector("#score").textContent= score;
}
document.querySelector(".pbtn").addEventListener("click",
    function(dets){
        var clickednum = (Number(dets.target.textContent));
        if(clickednum== htinum){
            increasescore();
            makebubble();
            newhit();
        }
    }
)